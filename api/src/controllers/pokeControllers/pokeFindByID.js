const getAllDBPokemons = require('./pokeFindAllDB');
const { default: axios } = require('axios');
const { BASE_URL, POKE } = require('../../../const');

const getPokemonsById = async function (idPokemon) {
    try {
        let pokeAll = await getAllDBPokemons();
        for (let i = 0; i < pokeAll.length; i++) {
            if (pokeAll[i].dataValues.id === idPokemon) {
                pokeAll[i].dataValues.types.length === 1 ?
                    pokeAll[i].dataValues.type = pokeAll[i].dataValues.types[0].name
                    : pokeAll[i].dataValues.type = pokeAll[i].dataValues.types[0].name + ", " + pokeAll[i].dataValues.types[1].name
                return pokeAll[i].dataValues;
            }
        };
        let idPoke = parseInt(idPokemon);
        let pokeAllAPI = await axios(`${BASE_URL}${POKE}${idPoke}`)
        console.log(pokeAllAPI)
        if (pokeAllAPI.data === 'Not Found') return {};
        else if (pokeAllAPI.data.name) {
            let pokeFound = {
                id: idPoke,
                img: pokeAllAPI.data.sprites.other.dream_world.front_default ?
                    pokeAllAPI.data.sprites.other.dream_world.front_default :
                    pokeAllAPI.data.sprites.other['official-artwork'].front_default,
                name: pokeAllAPI.data.name,
                hp: pokeAllAPI.data.stats[0].base_stat,
                attack: pokeAllAPI.data.stats[1].base_stat,
                defense: pokeAllAPI.data.stats[2].base_stat,
                speed: pokeAllAPI.data.stats[5].base_stat,
                height: pokeAllAPI.data.height,
                weight: pokeAllAPI.data.weight
            }
            pokeAllAPI.data.types.length === 1 ?
                pokeFound.type = pokeAllAPI.data.types[0].type.name
                : pokeFound.type = pokeAllAPI.data.types[0].type.name + ", " + pokeAllAPI.data.types[1].type.name
            return pokeFound
        };
    }
    catch (error) {
        return console.log("Pokemon not found by ID.", error);
    }
};

module.exports = getPokemonsById;