const { Pokemons, Types } = require('../../db');

const getAllDBPokemons = async function () {
    try {
        let pokeDB = await Pokemons.findAll({
            include: {
                model: Types,
            }
        });
        return pokeDB;
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Pokemon not found in "Created Data Base"');
    };
    return pokeDB;
};


module.exports = getAllDBPokemons;