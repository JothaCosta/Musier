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

    },
    

    async update (request,response){
        const {age, email, city, whatsapp, instrument, bio} = request.body
        const { musician_id } = request.params

        await connection('musician')
        .update({age, email, city, whatsapp, instrument, bio})
        .where({ musician_id })

        // fazer com que apenas o musicos possa alterar seu perfil, se ja nao foi isso

        return response.send()
    },

    // Vericar esta parte

    async check (request,response){
        
    }


}