const { default: axios } = require('axios');
const { BASE_URL, POKE } = require('../../../const');
const { Pokemons, Types } = require('../../db');

const getPokemonsByQuery = async function (req, res, next) {
    const { name } = req.query
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
                name: pokeDBName.name
            };
            pokeDBName.types.length === 1 ?
                pokeFoundName.typ = [pokeDBNameD.types[0].dataValues.name] :
                pokeFoundName.typ = [pokeDBName.types[0].dataValues.name, pokeDBName.types[1].dataValues.name]
            if (pokeFoundName.name === name) return res.status(200).send(pokeFoundName);
        }
        else if (pokeDBName === null) {
            let pokeAllAPI = await axios(`${BASE_URL}${POKE}${name}`)
            if (pokeAllAPI.data === 'Not Found') return {};
            else if (pokeAllAPI.data.name) {
                let pokeFound = {
                    id: pokeAllAPI.data.id,
                    name: pokeAllAPI.data.name,
                    img: pokeAllAPI.data.sprites.other.dream_world.front_default ?
                        pokeAllAPI.data.sprites.other.dream_world.front_default :
                        pokeAllAPI.data.sprites.other['official-artwork'].front_default,
                }
                pokeAllAPI.data.types.length === 1 ?
                    pokeFound.typ = [pokeAllAPI.data.types[0].type.name]
                    : pokeFound.typ = [pokeAllAPI.data.types[0].type.name, pokeAllAPI.data.types[1].type.name]

                return res.status(200).send(pokeFound);
            }
        }
        else return {};
    } catch (error) {
        console.log(error);
        next(error)
    }
};

module.exports = getPokemonsByQuery;