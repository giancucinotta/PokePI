const axios = require('axios');
const { BASE_URL, POKE } = require('../../../const');

const getAllApiPokemons = async function () {
    let pokeArray = [];
    try {
        let pokeApiArray = await axios(`${BASE_URL}${POKE}`);
        let secondPokeResults = await axios(pokeApiArray.data.next);
        pokeApiArray = pokeApiArray.data.results.concat(secondPokeResults.data.results);
        for (let i = 0; i < pokeApiArray.length; i++) {
            console.log(pokeApiArray[i])
            let pokeI = await axios(pokeApiArray[i].url)
            let eachPoke = {}
            pokeI.data.types.length === 1 ? (eachPoke = {
                name: pokeI.data.name,
                img: pokeI.data.sprites.front_default,
                types: pokeI.data.types[0].type.name
            }) :
                (eachPoke = {
                    name: pokeI.data.name,
                    img: pokeI.data.sprites.front_default,
                    types: pokeI.data.types[0].type.name + ", " + pokeI.data.types[1].type.name
                })
            pokeArray.push(eachPoke);
        }

    }
    catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
    return pokeArray;
};


module.exports = getAllApiPokemons;