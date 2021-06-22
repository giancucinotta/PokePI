export const ADD_POKEMON = 'ADD_POKEMON';
export const GET_POKEMON = 'GET_POKEMON';
export const GET_POKEMON_BY_ID = 'GET_POKEMON_BY_ID';
export const GET_POKEMON_BY_NAME = 'GET_POKEMON_BY_NAME';
export const POKEMON_BY_NAME_RESET = 'POKEMON_BY_NAME_RESET';
export const POKEMON_DETAIL_RESET = 'POKEMON_DETAIL_RESET';

export const addPokemon = (obj) => {
    return (dispatch) =>
        fetch("http://localhost:3001/pokemons", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
            .then((answer) => answer.json())
            .then((answer) => {
                dispatch({
                    type: ADD_POKEMON,
                    payload: answer
                })
            })
};

export const getPokemon = () => {
    return (dispatch) =>
        fetch("http://localhost:3001/pokemons")
            .then((answer) => answer.json())
            .then((answer) =>
                dispatch({
                    type: GET_POKEMON,
                    payload: answer
                }))
};

export const getPokemonDetail = (id) => {
    return (dispatch) =>
        fetch(`http://localhost:3001/pokemons/${id}`)
            .then((answer) => answer.json())
            .then((answer) =>
                dispatch({
                    type: GET_POKEMON_BY_ID,
                    payload: answer
                }))
};

export const getPokemonByName = (name) => {
    return (dispatch) =>
        fetch(`http://localhost:3001/pokemons?name=${name}`)
            .then((answer) => answer.json())
            .then((answer) =>
                dispatch({
                    type: GET_POKEMON_BY_NAME,
                    payload: answer
                }))
};

export const getPokemonByNameReset = () => {
    return (dispatch) => {
        dispatch({
            type: POKEMON_BY_NAME_RESET,
            payload: []
        })
    }
};

export const getPokemonDetailReset = () => {
    return (dispatch) => {
        dispatch({
            type: POKEMON_DETAIL_RESET,
            payload: []
        })
    }
};