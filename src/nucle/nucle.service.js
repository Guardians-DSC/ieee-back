const response = require('../../util/responses');
const Nucle = require('./nucle.model');

const nucleService = (function ()  {
  const _saveNucle = async function (nucle, callback) {
    try {
      const newNucle = await Nucle.create(nucle);
      
      return callback(response.ok(`Núcleo ${newNucle.name} criado com sucesso.`, newNucle));

    } catch (err) {
      return callback(response.badRequest(err.message))
    }
  };

  const _getNucleById = async function (nucleName, callback) {
    try {
      const nucle = await Nucle.find({name: nucleName});

      if (nucle)
        return callback(response.ok('', nucle));

      else 
        return callback(response.notFound('Não foi possivel encontrar o núcleo.'));

    } catch (err) {
      return callback(response.badRequest('Erro ao recuperar núcleo.'));
    }
  };

  const _getAllNucles = async function (callback) {
    try {
      Nucle.find({}, function (err, nucle) {
        if (err) 
          return callback(response.notFound('Não foi possível recuperar os núcleos.'));
        else 
          return callback(response.ok("", nucle));
        });

    } catch (err) {
      return callback(response.badRequest('Erro ao retornar núcleos.'));
    }
  };

  const _updateNucle = async function (nucleName, updatedInfo, callback) {
    try {      
      const nucle = await Nucle.findOneAndUpdate({name: nucleName}, updatedInfo, {new: true}, err => {
        if (err) 
          return callback(response.badRequest('Não foi possível atualizar o núcleo.'));
      });

      if (!nucle)
        return callback(response.notFound('Núcleo não encontrado.'));
      else
        return callback(response.ok('', nucle));

    } catch (err) {
      return callback(response.badRequest('Erro na atualização.'));
    }
  }

  const _removeNucle = async function (nucleName, callback) {
    try {          
      const nucle = await Nucle.findOneAndDelete({name: nucleName});
          
      if (!nucle) 
        return callback(response.notFound('Não foi possível encontrar o núcleo informado.'));
      else
        return callback(response.ok('Núcleo removido com sucesso.'));

    } catch (err) {
      return callback(response.notFound("Remoção do núcleo mal sucedido."));
    }
  }

  return {
    saveNucle: _saveNucle,
    getNucleById: _getNucleById,
    getAllNucles: _getAllNucles,
    updateNucle: _updateNucle,
    removeNucle: _removeNucle
  }
    
})();

module.exports = nucleService;