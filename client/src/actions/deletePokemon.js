export const removePokemon = (id) => {
    return {
        type: 'RemovePokemon',
        payload: id
    }
}