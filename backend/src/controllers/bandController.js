const connection = require('../database/connection');

module.exports = {

    async list (request, response){
        const {page = 1} = request.query;  

        const band = await connection('band')
        .limit(5)
        .offset((page - 1) * 5)
        .select('*');
        
        return response.json(band);
    },

    async create (request, response){
        const {name,style, bio, musician_id} = request.body

        await connection('band').insert({
            name,
            style,
            bio,
            musician_id,
        });
    
        return response.json({name,style, bio, musician_id });
    }
    
}


// Verificar codigo