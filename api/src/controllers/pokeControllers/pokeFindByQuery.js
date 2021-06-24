const { default: axios } = require('axios');
const { BASE_URL, POKE } = require('../../../const');
const { Pokemons, Types } = require('../../db');

const getPokemonsByQuery = async function (name) {
    try {
        const pokeDBName = await Pokemons.findOne({
            where: {
                name: name
            },
            include: Types
        })
        if (pokeDBName !== null) {
            let pokeFoundName = {
                id: pokeDBName.id,
                img: pokeDBName.img,
                name: pokeDBName.name,
                hp: pokeDBName.hp,
                attack: pokeDBName.attack,
                defense: pokeDBName.defense,
                speed: pokeDBName.speed,
                height: pokeDBName.height,
                weight: pokeDBName.weight
            };
            pokeDBName.types.length === 1 ?
                pokeFoundName.typ = [pokeDBNameD.types[0].dataValues.name] :
                pokeFoundName.typ = [pokeDBName.types[0].dataValues.name, pokeDBName.types[1].dataValues.name]
            // pokeFoundName.type = pokeDBNameD.types[0].dataValues.name :
            // pokeFoundName.type = pokeDBName.types[0].dataValues.name + ", " + pokeDBName.types[1].dataValues.name
            if (pokeFoundName.name === name) return pokeFoundName;
        }
        if (pokeDBName === null) {
            let pokeAllAPI = await axios(`${BASE_URL}${POKE}${name}`)
            if (pokeAllAPI.data === 'Not Found') return {};
            if (pokeAllAPI.data.name) {
                let pokeFound = {
                    id: pokeAllAPI.data.id,
                    name: pokeAllAPI.data.name,
                    hp: pokeAllAPI.data.hp,
                    attack: pokeAllAPI.data.attack,
                    defense: pokeAllAPI.data.defense,
                    speed: pokeAllAPI.data.speed,
                    height: pokeAllAPI.data.height,
                    weight: pokeAllAPI.data.weight,
                    img: pokeAllAPI.data.sprites.other.dream_world.front_default ?
                        pokeAllAPI.data.sprites.other.dream_world.front_default :
                        pokeAllAPI.data.sprites.other['official-artwork'].front_default,
                }
                pokeAllAPI.data.types.length === 1 ?
                    pokeFound.typ = [pokeAllAPI.data.types[0].type.name]
                    : pokeFound.typ = [pokeAllAPI.data.types[0].type.name, pokeAllAPI.data.types[1].type.name]

                // pokeFound.type = pokeAllAPI.data.types[0].type.name
                // : pokeFound.type = pokeAllAPI.data.types[0].type.name + ", " + pokeAllAPI.data.types[1].type.name
                return pokeFound
            }
        }
        else return {};
    } catch (error) {
        return console.log("Pokemon not found by that name.", error);
    }
};

module.exports = getPokemonsByQuery;