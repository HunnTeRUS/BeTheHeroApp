const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async listAll(request, response) {
        try {
            const ongs = await connection('ongs').select('*');

            return response.json(ongs);
        } catch (err) {
            console.log(err);
        }
    },

    async create(request, response) {
        try {
            const { name, email, whatsapp, city, uf } = request.body;

            const id = crypto.randomBytes(4).toString('HEX');

            await connection('ongs').insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf
            });

            return response.json({ id });
        } catch (err) {
            console.log(err);
        }
    }
};