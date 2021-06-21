const { Pokemons, Types } = require('../../db');

const getAllDBPokemons = async function () {
    let pokeResultDB = [];
    try {
        let pokeDB = await Pokemons.findAll({
            include: {
                model: Types,
            }
        });
        for (let i = 0; i < pokeDB.length; i++) {
            let pokeObj = {
                id: pokeDB[i].dataValues.id,
                img: pokeDB[i].dataValues.img,
                name: pokeDB[i].dataValues.name,
                hp: pokeDB[i].dataValues.hp,
                attack: pokeDB[i].dataValues.attack,
                defense: pokeDB[i].dataValues.defense,
                speed: pokeDB[i].dataValues.speed,
                height: pokeDB[i].dataValues.height,
                weight: pokeDB[i].dataValues.weight
            }
            pokeDB[i].dataValues.types.length === 1 ?
                pokeObj.type = pokeDB[i].dataValues.types[0].name
                : pokeObj.type = pokeDB[i].dataValues.types[0].name + ", " + pokeDB[i].dataValues.types[1].name
            pokeResultDB.push(pokeObj)
        }
        return pokeResultDB;
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Pokemon not found in "Created Data Base"');
    };
};


module.exports = getAllDBPokemons;