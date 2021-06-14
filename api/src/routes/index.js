const { Router } = require('express');
const PokemonRoutes = require('./pokemons.js');
const TipoRoutes = require('./types.js');

const router = Router();

router.use('/pokemons', PokemonRoutes);
router.use('/types', TipoRoutes);

module.exports = router;