import { GET_TYPES } from "../actions/types.js";
import { ADD_POKEMON, GET_POKEMON, GET_POKEMON_BY_NAME, GET_POKEMON_BY_ID } from "../actions/pokemon.js";

const initialState = {
    pokemons: [],
    pokemon_detail: {},
    types: [],
    pokemon_search: {},
    pokemon_created: {}
};

const pokemons = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POKEMON':
            return {
                ...state,
                pokemon_created: action.payload
            }
        case 'GET_POKEMON':
            return {
                ...state,
                pokemons: action.payload
            }
        case 'GET_TYPES':
            return {
                ...state,
                types: action.payload
            }
        case 'GET_POKEMON_BY_ID':
            return {
                ...state,
                pokemon_detail: action.payload
            }
        case 'GET_POKEMON_BY_NAME':
            return {
                ...state,
                pokemon_search: action.payload
            }
        default:
            return state
    }
}

export default pokemons;