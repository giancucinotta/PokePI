const { Pokemons, Types } = require('../../db');
const { v4: uuidv4 } = require('uuid');

async function addPokemon(req, res, next) {
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
        next(error)
    }
};

module.exports = addPokemon;