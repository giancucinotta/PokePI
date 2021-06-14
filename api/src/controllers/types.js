const { Types } = require('../db')
const axios = require('axios');
const { BASE_URL, TYPE } = require('../../const');
/*
Get /types: obtener todos los tipos de pokemon posibles + en principio traerlos desde pokeapi y guardarlos en DB, luego usarlos de DB
*/

async function getAllTipos(req, res) {
    let tiposDB = await Types.findAll({ limit: 20 });
    // console.log(tiposDB)
    if (tiposDB.length < 20) {
        try {
            let { data } = await axios(`${BASE_URL}${TYPE}`);
            for (let i = 0; i < 20; i++) {
                const typeResults = data.results[i].name;
                await Types.findOrCreate({
                    where: {
                        name: typeResults,
                    }
                });
            }
            return res.redirect('/types');
        }
        catch (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        }
    }
    res.status(200).json(tiposDB);
};

module.exports = { getAllTipos };