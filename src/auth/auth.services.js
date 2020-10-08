const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authConfig = require('../../config/auth.json');

const response = require('../../util/responses');
const User = require('../user/user.model');

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400
  });
}

const authService = (function () { 
  const _register = async function (req, callback) {
    try {
      const userData = req.body;
      const user = await User.findOne({ email : userData.email });
      
      if (!user) {
        let userPassword = await bcrypt.hash(userData.password, 10);
        const newUser = await User.create({...userData, password: userPassword});

        return callback(response.ok(`Usuário ${newUser.name} criado com sucesso.`));
      }

      return callback(response.badRequest('Usuário já existe.'));

    } catch (err) {
      return callback(response.badRequest(err.message));
    }
  };

  const _login = async function (req, callback) {
    const userData = req.body;
    const user = await User.findOne({ email : userData.email });

    if (!user)
      return callback(response.notFound('Usuário não encontrado.'));

    let passwordMatch = await bcrypt.compare(userData.password, user.password);
    if(!passwordMatch)
      return callback(response.badRequest('Senha inválida.'));

    return callback(response.ok('', { user, token: generateToken({ id: user.email })}));
  };
  
  const _checkToken = function (req, callback) {
    const authHeader = req.headers.authorization;
    if (!authHeader)
      return callback(response.unauthorized('No token provided.'));

    const parts = authHeader.split(' ');
    if (!parts.length === 2)
      return callback(response.unauthorized('Token error.'));

    const [ scheme, token ] = parts;    
    if (!/^Bearer$/i.test(scheme))
      return callback(response.unauthorized('Token malformatted.'));

    jwt.verify(token, authConfig.secret, (err, decoded) => {
      if (err) return callback(response.unauthorized('Token invalid.'));

      req.userId = decoded.id;
      return callback(response.ok());
    });
  };

  return {
    register: _register,
    login: _login,
    checkToken: _checkToken
  }
  
})();

module.exports = authService;