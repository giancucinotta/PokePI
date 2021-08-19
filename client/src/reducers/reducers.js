import { GET_TYPES } from "../actions/types.js";
import { ADD_POKEMON, GET_POKEMON, GET_POKEMON_BY_NAME, GET_POKEMON_BY_ID, POKEMON_BY_NAME_RESET, POKEMON_DETAIL_RESET } from "../actions/pokemon.js";
import { POKEMONS_ASC, POKEMONS_DESC, ATTACK_ASC, ATTACK_DESC, NO_ORDER, ONLY_API, ONLY_DB, ALL, BY_TYPE, HP_ASC, HP_DESC } from "../components/Filters/filterActions";

const initialState = {
    pokemons: [],
    pokemon_detail: [],
    types: [],
    pokemon_search: [],
    pokemon_created: [],
    filteredPokemon: [],
    filtered_by: 'All',
    ordered_by: 'All'
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
        case 'POKEMON_BY_NAME_RESET':
            return {
                ...state,
                pokemon_search: action.payload
            }
        case 'POKEMON_DETAIL_RESET':
            return {
                ...state,
                pokemon_detail: action.payload
            }
        case 'POKEMONS_ASC':
            return {
                ...state,
                filteredPokemon: action.payload.orderedPokemon,
                ordered_by: action.payload.name
            }
        case 'POKEMONS_DESC':
            return {
                ...state,
                filteredPokemon: action.payload.orderedPokemon,
                ordered_by: action.payload.name
            }
        case 'ATTACK_ASC':
            return {
                ...state,
                filteredPokemon: action.payload.orderedPokemon,
                ordered_by: action.payload.name
            }
        case 'ATTACK_DESC':
            return {
                ...state,
                filteredPokemon: action.payload.orderedPokemon,
                ordered_by: action.payload.name
            }
        case 'HP_ASC':
            return {
                ...state,
                filteredPokemon: action.payload.orderedPokemon,
                ordered_by: action.payload.name
            }
        case 'HP_DESC':
            return {
                ...state,
                filteredPokemon: action.payload.orderedPokemon,
                ordered_by: action.payload.name
            }
        case 'NO_ORDER':
            return {
                ...state,
                filteredPokemon: action.payload.pokemon,
                ordered_by: action.payload.name
            }
        case 'ONLY_API':
            return {
                ...state,
                filteredPokemon: action.payload.orderedByOrigin,
                filtered_by: action.payload.name
            }
        case 'ONLY_DB':
            return {
                ...state,
                filteredPokemon: action.payload.orderedByOrigin,
                filtered_by: action.payload.name
            }
        case 'ALL':
            return {
                ...state,
                filteredPokemon: action.payload.array,
                filtered_by: action.payload.name
            }
        case 'BY_TYPE':
            return {
                ...state,
                filteredPokemon: action.payload.arrayByType,
                filtered_by: action.payload.name
            }
        default:
            return state
    }
}

export default pokemons;