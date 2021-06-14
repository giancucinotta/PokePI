const initialState = {
    pokemonCreated: [],
    pokemonDetail: {}
};

const pokemons = (state = initialState, action) => {
    switch (action.type) {
        case 'AddPokemon':
            return [...state, action.payload]

        case 'RemovePokemon':
            return state.filter(pokemon => pokemon.id !== action.payload)

        case 'PokemonDetail':
            return {
                ...state,
                pokemonDetail: action.payload
            }
        default:
            return state
    }
}

export default pokemons;