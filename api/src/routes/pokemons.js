const { Router } = require('express');
const { getPokemonsByQuery, getPokemonsById, getAllPokemons, addPokemon } = require('../controllers/pokeControllers/indexPoke');

const router = Router()

router.post('/', addPokemon);
router.get('/by', getPokemonsByQuery);
router.get('/', getAllPokemons);
router.get('/:idPokemon', getPokemonsById);

module.exports = router;