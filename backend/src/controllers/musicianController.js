const connection = require('../database/connection');

module.exports = {

    async list (request,response){    
        const {page = 1} = request.query;                               
        
        const musician = await connection('musician')
        .limit(5)
        .offset((page - 1) * 5)
        .select('*')


        return response.json(musician);
    
    },


    async create (request,response) {

        const {name, age, email, city, whatsapp, instrument, password, bio} = request.body

        await connection('musician').insert({
            name,
            age,
            email,
            city,
            whatsapp,
            instrument,
            password,
            bio,
        });
    
        return response.json({name, age, email, city, whatsapp, instrument, password, bio });

    }
}