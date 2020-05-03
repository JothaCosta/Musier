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
        const {name,style, bio} = request.body 
        const musician_id = request.headers.authorization

        const [id] = await connection('band').insert({
            name,
            style,
            bio,
            musician_id,

            /* fazer um "if" para que o musico não possua
             mais de uma banda 
            */
        });
    
        return response.json({id,name,style, bio, musician_id});
    },


    async update (request,response){
        const {name,style, bio} = request.body;
        const { id } = request.params;

        await connection('band')
        .update({name,style, bio})
        .where({ id })

        // verificar para apenas que o usuario/lider possa modificar

        return response.send()
    },

    async delete(request, response){
        const {id} = request.params;

        await connection('band')
        .where('id',id)
        .delete();

        // verificar para apenas que o usuario/lider possa deletar

        return response.status(204).send()
    }
    
}


// Verificar codigo