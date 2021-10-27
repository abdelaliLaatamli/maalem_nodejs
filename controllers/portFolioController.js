const { User , PortFolio } = require('./../models/index');


module.exports.createPortFolio = async (  request , response ) => {

    response.status(200).json(request.body);

    
}