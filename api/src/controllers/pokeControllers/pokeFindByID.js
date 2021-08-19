const { default: axios } = require('axios');
const { BASE_URL, POKE } = require('../../../const');
const { Pokemons, Types } = require('../../db');


const getPokemonsById = async function (idPokemon) {
    try {
        if (idPokemon.length > 5) {
            let pokeDBID = await Pokemons.findOne({
                where: {
                    id: idPokemon
                },
                include: Types
            })
            let pokeFoundID = {
                id: pokeDBID.id,
                img: pokeDBID.img,
                name: pokeDBID.name,
                hp: pokeDBID.hp,
                attack: pokeDBID.attack,
                defense: pokeDBID.defense,
                speed: pokeDBID.speed,
                height: pokeDBID.height,
                weight: pokeDBID.weight
            };
            pokeDBID.types.length === 1 ?
                pokeFoundID.typ = [pokeDBID.types[0].dataValues.name] :
                pokeFoundID.typ = [pokeDBID.types[0].dataValues.name, pokeDBID.types[1].dataValues.name]
            if (pokeFoundID.id === idPokemon) return pokeFoundID
        }
        else {
            let idPoke = parseInt(idPokemon);
            let pokeAllAPI = await axios(`${BASE_URL}${POKE}${idPoke}`)
            if (pokeAllAPI.data === 'Not Found') return {};
            else if (pokeAllAPI.data.name) {
                let pokeFound = {
                    id: idPoke,
                    img: pokeAllAPI.data.sprites.other.dream_world.front_default ?
                        pokeAllAPI.data.sprites.other.dream_world.front_default :
                        pokeAllAPI.data.sprites.other['official-artwork'].front_default,
                    name: pokeAllAPI.data.name,
                    hp: pokeAllAPI.data.stats[0].base_stat,
                    attack: pokeAllAPI.data.stats[1].base_stat,
                    defense: pokeAllAPI.data.stats[2].base_stat,
                    speed: pokeAllAPI.data.stats[5].base_stat,
                    height: pokeAllAPI.data.height,
                    weight: pokeAllAPI.data.weight
                }
                pokeAllAPI.data.types.length === 1 ?
                    pokeFound.typ = [pokeAllAPI.data.types[0].type.name]
                    : pokeFound.typ = [pokeAllAPI.data.types[0].type.name, pokeAllAPI.data.types[1].type.name]
                return pokeFound
            }
        };
    }
    catch (error) {
        return console.log("Pokemon not found by ID.", error);
    }
};

module.exports = getPokemonsById;