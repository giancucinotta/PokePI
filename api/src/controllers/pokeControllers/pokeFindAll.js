const getAllDBPokemons = require('./pokeFindAllDB');
const getAllApiPokemons = require('./pokeFindAllApi')

const getAllPokemons = async function () {
    try {
        let pokemonFromDB = await getAllDBPokemons();
        let pokemonFromApi = await getAllApiPokemons();
        let bothPokemons = pokemonFromDB.concat(pokemonFromApi);
        return bothPokemons;
    } catch (error) {
        console.log(error);
        res.status(500).send('Pokemon not found in "Created Data Base" and API');
    }
}

module.exports = getAllPokemons;