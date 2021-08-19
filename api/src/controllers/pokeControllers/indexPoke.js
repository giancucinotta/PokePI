const getPokemonsByQuery = require('./pokeFindByQuery');
const getPokemonsById = require('./pokeFindByID');
const getAllPokemons = require('./pokeFindAll');
const getAllApiPokemons = require('./pokeFindAllApi');
const getAllDBPokemons = require('./pokeFindAllDB');
const addPokemon = require('./addPokemon');

module.exports = {
    getPokemonsByQuery,
    getPokemonsById,
    getAllDBPokemons,
    getAllApiPokemons,
    getAllPokemons,
    addPokemon
};