const { Pokemons, Types } = require('../../db');

const getAllDBPokemons = async function (next) {
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
                name: pokeDB[i].dataValues.name
            }
            pokeDB[i].dataValues.types.length === 1 ?
                pokeObj.typ = [pokeDB[i].dataValues.types[0].name]
                : pokeObj.typ = [pokeDB[i].dataValues.types[0].name, pokeDB[i].dataValues.types[1].name]
            pokeResultDB.push(pokeObj)
        }
        return pokeResultDB;
    }
    catch (error) {
        console.log(error);
        next(error)
    };
};


module.exports = getAllDBPokemons;