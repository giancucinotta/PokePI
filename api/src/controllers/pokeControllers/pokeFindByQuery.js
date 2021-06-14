const getAllDBPokemons = require('./pokeFindAllDB');
const { default: axios } = require('axios');
const { BASE_URL, POKE } = require('../../../const');

const getPokemonsByQuery = async function (name) {
    try {
        let pokeAll = await getAllDBPokemons();
        for (let i = 0; i < pokeAll.length; i++) {
            if (pokeAll[i].dataValues.name === name) {
                return pokeAll[i].dataValues;
            }
        };
        let pokeAllAPI = await axios(`${BASE_URL}${POKE}${name}`)
        if (pokeAllAPI.data.name) {
            let pokeFound = {
                name: pokeAllAPI.data.name,
                hp: pokeAllAPI.data.stats[0].base_stat,
                attack: pokeAllAPI.data.stats[1].base_stat,
                defense: pokeAllAPI.data.stats[2].base_stat,
                speed: pokeAllAPI.data.stats[5].base_stat,
                height: pokeAllAPI.data.height,
                weight: pokeAllAPI.data.weight
            }
            return pokeFound
        };
    } catch (error) {
        return console.log("Pokemon not found by that name.", error);
    }
};

module.exports = getPokemonsByQuery;