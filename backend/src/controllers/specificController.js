const connection = require('../database/connection');

module.exports = {

    async list (request, response){
        const {page = 1} = request.query;  

        const Guitarra = request.headers.specific;

        const specific = await connection('musician')
            .where('instrument', Guitarra)
            .limit(5)
            .offset((page - 1) * 5)
            .select('*');
        
        return response.json(specific);
    }
}

// Listagem por instrumeto
//Melhorar codigo
