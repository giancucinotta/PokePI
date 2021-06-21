const { Router } = require('express');
const { Pokemons, Types } = require('../db');
const { v4: uuidv4 } = require('uuid');
const { getPokemonsByQuery, getPokemonsById, getAllPokemons } = require('../controllers/pokeControllers/indexPoke');

const router = Router()

router.post('/', async function (req, res) {
    const id = uuidv4();
    let data = { ...req.body, id };
    if (!req.body.name) return res.status(400).send('Missing properties! Try adding more!');
    try {
        const createdPoke = await Pokemons.create(data);
        await createdPoke.addTypes(req.body.type1, { through: 'pokemon_type' });
        await createdPoke.addTypes(req.body.type2, { through: 'pokemon_type' });
        const poke_type = await Pokemons.findOne({
            where: { name: req.body.name },
            include: Types
        });
        return res.json(poke_type);
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error, could not add the new Pokemon to the "Data Base"');
    }
})
router.get('/', async function (req, res) {
    if (req.query.name) {
        let findByName = await getPokemonsByQuery(req.query.name);
        if (findByName.name) return res.status(200).send(findByName);
        else return res.status(404).send('Pokemon not found, try again with another name');
    }
    else {
        let pokeArray = await getAllPokemons();
        return res.status(200).send(pokeArray);
    }
});

router.get('/:idPokemon', async function (req, res) {
    if (req.params.idPokemon) {
        let findByID = await getPokemonsById(req.params.idPokemon);
        if (findByID.name) res.status(200).json(findByID);
        else return res.status(404).send('Pokemon not found, try again with another ID')
    }
});

module.exports = router;