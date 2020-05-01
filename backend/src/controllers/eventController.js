const connection = require('../database/connection');

module.exports = {

    async list (request, response){
        const {page = 1} = request.query;  

        const event = await connection('event')
        .limit(5)
        .offset((page - 1) * 5)
        .select('*');
        
        return response.json(event);
    },

    async create (request,response) {

        const {name, city, bio, facebook} = request.body

        await connection('event').insert({
            name,
            city,
            bio,
            facebook,
        });

        return response.json({name, city, bio, facebook});
    }

}