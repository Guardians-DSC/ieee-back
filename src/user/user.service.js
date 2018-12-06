const mongoose = require('mongoose');
const response = require('../../util/responses');
const User = require('./user.model');

const userService = (function () {
    const _saveUser = async function (user, callback) {
        try {
            //TODO: Módulo de validação de dados vindos do front
            const newUser = await User.create(user);

            return callback(response.ok('Usuário ' + newUser.name + ' criado com sucesso'));
        } catch (err) {
            return callback(response.badRequest(err.message));
        }
    };

    const _removeUser = async function (userId, callback) {
        try {
            const user = await User.findOneAndRemove(
                mongoose.Types.ObjectId(userId)
            );

            if (!user) {
                return callback(
                    response.notFound('Não foi possível encontrar usuário')
                );
            }

            return callback(
                response.ok('Usuário removido.')
            );
        } catch (err) {
            response.notFound('Remoção do usuário mal sucedida');
        }
    };

    const _getAllUsers = async function (callback) {
        User.find({}, function (err, users) {
            if (err) {
                callback(
                    response.notFound('Não foi possível recuperar usuários.')
                );
            } else {
                callback(response.ok("", users));
            }
        });
    };

    const _updateUser = async function (userId,updatedInfo, callback) {
        try {
            await User.findByIdAndUpdate(userId, updatedInfo, function (err, user) {
                if (err) {
                    return callback(
                        response.badRequest('Erro na atualização')
                    );
                }
                return callback(
                    response.ok('', user)
                );
            });
        } catch (err) {
            callback(response.badRequest('Erro na atualização'))
        }
    }

    return {
        saveUser: _saveUser,
        removeUser: _removeUser,
        getAllUsers: _getAllUsers,
        updateUser: _updateUser,
    }
})();

module.exports = userService;