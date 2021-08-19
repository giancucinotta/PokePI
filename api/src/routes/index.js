const { Router } = require('express');
const PokemonRoutes = require('./pokemons.js');
const TypeRoutes = require('./types.js');

const router = Router();

router.use('/pokemons', PokemonRoutes);
router.use('/types', TypeRoutes);

module.exports = router;