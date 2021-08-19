const { Pokemons, Types } = require('../db');
const axios = require('axios');
const { BASE_URL, POKE } = require('../../const');
const { v4: uuidv4 } = require('uuid');

/* Necesito:
get /pokemons: listar los primeros 12 de la pokeapi + datos necesarios para la ruta principal
get /pokemons/{idpokemon}: detalle de un pokemon en particular + traer los datos de la ruta detalle + que funcione para pokeapi y los creados
get /pokemons?name="...": obtener exactamente el pokemon pasado por query + si no existe usar el mensaje de error
post / pokemons: recibe los datos recolectados del form por body + crea un pokemon en la base de datos
*/

async function addPokemon(req, res) {
    const id = uuidv4();
    let data = { ...req.body, id }; 
    if (!req.body.name) return res.status(400).send('Body vacio!!!');
    try {
        const createdPoke = await Pokemons.create(data)
        await createdPoke.addTypes(req.body.type, { through: 'pokemon_type' })
        await createdPoke.addTypes(req.body.type2, { through: 'pokemon_type' })
        const poke_type = await Pokemons.findOne({
            where: { name: req.body.name },
            include: Types
        });
        return res.json(poke_type)
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error')
    }
};

async function getAllPokemons(req, res) {
//     let pokeArray = [];
//     // console.log(pokeDB)
//     if (pokeArray.length < 12) {
//         try {
//             let pokeResults = await axios(`${BASE_URL}${POKE}`)
//             // console.log(pokeResults.data.results)
//             for (let i = 0; i < 12; i++) {
//                 let pokeI = await axios(pokeResults.data.results[i].url)
//                 // console.log(pokeI)
//                 let eachPoke = {}
//                 // console.log(pokeI.data.types[1])
//                 pokeI.data.types.length === 1 ? (eachPoke = {
//                     name: pokeI.data.name,
//                     img: pokeI.data.sprites.front_default,
//                     typ: pokeI.data.types[0].type.name
//                 }) :
//                     (eachPoke = {
//                         name: pokeI.data.name,
//                         img: pokeI.data.sprites.front_default,
//                         typ: [pokeI.data.types[0].type.name, pokeI.data.types[1].type.name]
//                     })
//                 pokeArray.push(eachPoke);
//             }

//             //console.log(pokeArray)
//         }
//         catch (error) {
//             console.log(error);
//             res.status(500).send('Internal Server Error')
//         }
//     }
    if (req.query.name) {
        let queryName = req.query.name.toLowerCase();
        const isItThere = await Pokemons.findOne({ where: { name: queryName } })
        //console.log("AAAAAAAAAAAA", isItThere)
        if (isItThere === null) {
            const findByName = await axios(`${BASE_URL}${POKE}${queryName}`)
            //console.log("BBBBBBBBBBBBB", findByName.data)
            if (findByName.data === undefined) { // Busca pokeapi pero falta buscar en DB
                return res.status(404).send("Error, pokemon not found")
            } else {
                const found = {
                    name: findByName.data.name,
                    id: findByName.data.id,
                    img: findByName.data.sprites.front_default,
                    hp: findByName.data.stats[0].base_stat,
                    attack: findByName.data.stats[1].base_stat,
                    defense: findByName.data.stats[2].base_stat,
                    speed: findByName.data.stats[5].base_stat,
                    height: findByName.data.height,
                    weight: findByName.data.weight,
                }
                if (findByName.data.types.length === 1) {
                    found.typ = [findByName.data.types[0].type.name]
                } else {
                    found.typ = [findByName.data.types[0].type.name, findByName.data.types[1].type.name]

                }
                return res.json(found).status(200)
            }
        }
        return res.json(isItThere.dataValues)
    } else {
        res.status(200).send(pokeArray)
    }
};

async function findById(req, res) {
    let pokeId = req.params.idPokemon;
    if (pokeId.length < 5) {
        try {
            const findByPokeId = await axios(`${BASE_URL}${POKE}${pokeId}`)
            //console.log("BBBBBBBBBBBBB", findByName.data)
            if (findByPokeId.data === undefined) { // Busca pokeapi pero falta buscar en DB
                return res.status(404).send("Error, pokemon not found")
            } else {
                const found = {
                    name: findByPokeId.data.name,
                    id: findByPokeId.data.id,
                    img: findByPokeId.data.sprites.front_default,
                    hp: findByPokeId.data.stats[0].base_stat,
                    attack: findByPokeId.data.stats[1].base_stat,
                    defense: findByPokeId.data.stats[2].base_stat,
                    speed: findByPokeId.data.stats[5].base_stat,
                    height: findByPokeId.data.height,
                    weight: findByPokeId.data.weight,
                }
                if (findByPokeId.data.types.length === 1) {
                    found.typ = [findByPokeId.data.types[0].type.name];
                } else {
                    found.typ = [findByPokeId.data.types[0].type.name, findByPokeId.data.types[1].type.name]
                }
                return res.json(found).status(200)
            }

        } catch (error) {
            console.log(error);
            res.status(400).send('Bad ID request, try another time!')
        }
    } else {
        const isItThere = await Pokemons.findOne({ where: { id: pokeId } })
        //console.log("AAAAAAAAAAAA", isItThere)
        if (isItThere === null) {
            return res.status(400).send('Bad ID request, try another time!')
        }
        return res.json(isItThere.dataValues)
    }
}


module.exports = {
    getAllPokemons,
    addPokemon,
    findById
};