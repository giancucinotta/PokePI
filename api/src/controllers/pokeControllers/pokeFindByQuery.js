const getAllDBPokemons = require('./pokeFindAllDB');
const { default: axios } = require('axios');
const { BASE_URL, POKE } = require('../../../const');

const getPokemonsByQuery = async function (name) {
    try {
        let pokeAll = await getAllDBPokemons();
        for (let i = 0; i < pokeAll.length; i++) {
            if (pokeAll[i].dataValues.name === name) {
                pokeAll[i].dataValues.types.length === 1 ?
                    pokeAll[i].dataValues.type = pokeAll[i].dataValues.types[0].name
                    : pokeAll[i].dataValues.type = pokeAll[i].dataValues.types[0].name + ", " + pokeAll[i].dataValues.types[1].name
                return pokeAll[i].dataValues;
            }
        };
        let pokeAllAPI = await axios(`${BASE_URL}${POKE}${name}`)
        if(pokeAllAPI.data === 'Not Found') return {};
        else if (pokeAllAPI.data.name) {
            let pokeFound = {
                id: pokeAllAPI.data.id,
                name: pokeAllAPI.data.name,
                img: pokeAllAPI.data.sprites.other.dream_world.front_default ?
                pokeAllAPI.data.sprites.other.dream_world.front_default : 
                pokeAllAPI.data.sprites.other['official-artwork'].front_default,
            }
            pokeAllAPI.data.types.length === 1 ?
            pokeFound.type = pokeAllAPI.data.types[0].type.name 
            : pokeFound.type = pokeAllAPI.data.types[0].type.name + ", " + pokeAllAPI.data.types[1].type.name
            return pokeFound
        };
    } catch (error) {
        return console.log("Pokemon not found by that name.", error);
    }
};

module.exports = getPokemonsByQuery;