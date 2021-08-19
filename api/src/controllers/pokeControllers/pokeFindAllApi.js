const axios = require('axios');
const { BASE_URL, POKE } = require('../../../const');

const getAllApiPokemons = async function (next) {
    let pokeArray = [];
    try {
        let pokeApiArray = await axios(`${BASE_URL}${POKE}?offset=00&limit=40`);
        let cleanPokeResults = pokeApiArray.data.results;
        for (let i = 0; i < cleanPokeResults.length; i++) {
            let pokeI = await axios(cleanPokeResults[i].url)
            let eachPoke = {}
                eachPoke = {
                id: pokeI.data.id,
                name: pokeI.data.name,
                img: pokeI.data.sprites.front_default
            } 
            pokeI.data.types.length === 1 ? eachPoke.typ = [pokeI.data.types[0].type.name] : eachPoke.typ = [pokeI.data.types[0].type.name, pokeI.data.types[1].type.name];
            pokeArray.push(eachPoke);
        }
    }
    catch (error) {
        console.log(error);
        next(error)
    }
    return pokeArray;
};

module.exports = getAllApiPokemons;