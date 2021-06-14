const getAllDBPokemons = require('./pokeFindAllDB');
const { default: axios } = require('axios');
const { BASE_URL, POKE } = require('../../../const');

const getPokemonsById = async function (idPokemon) {
    try {
        let pokeAll = await getAllDBPokemons();
        for (let i = 0; i < pokeAll.length; i++) {
            if (pokeAll[i].dataValues.id === idPokemon){
                return pokeAll[i].dataValues;
            }
        };
        let idPoke = parseInt(idPokemon);
        let pokeAllAPI = await axios(`${BASE_URL}${POKE}${idPoke}`)
        console.log(pokeAllAPI)
        if(pokeAllAPI.data === 'Not Found') return {};
        else if (pokeAllAPI.data.name) {
            let pokeFound = {
                id: idPoke,
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
    }
    catch (error) {
        return console.log("Pokemon not found by ID.", error);
    }
};

module.exports = getPokemonsById;