const connection = require('../database/connection');

module.exports = {

    async list (request, response){
        const {page = 1} = request.query;  

        //const Guitarra = request.headers.specific;

        const {instrument} = request.body;

        const specific = await connection('musician')
            .where('instrument', instrument)
            .limit(5)
            .offset((page - 1) * 5)
            .select('*');
        
        return response.json(specific);
    }
}

//Melhorar codigo
