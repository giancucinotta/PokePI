const { Router } = require('express')
const { getAllPokemons, addPokemon, findById } = require("../controllers/pokemons")
const router = Router()

router.get('/', getAllPokemons);

router.post('/', addPokemon);

router.get('/:idPokemon', findById);

module.exports = router;