export const addPokemon = (arg) => {
    return {
        type: 'AddPokemon',
        payload: {
            ...arg 
        }
    }
}
