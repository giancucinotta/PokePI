const getAllDBPokemons = require('./pokeFindAllDB');
const getAllApiPokemons = require('./pokeFindAllApi')

const getAllPokemons = async function (req, res, next) {
    try {
        let pokemonFromDB = await getAllDBPokemons();
        let pokemonFromApi = await getAllApiPokemons();
        let bothPokemons = pokemonFromDB.concat(pokemonFromApi);
        return res.status(200).send(bothPokemons);
    } catch (error) {
        console.log(error);
        next(error)
    }
}

module.exports = getAllPokemons;