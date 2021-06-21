import { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { getPokemon } from "../../actions/pokemon";

import './Home.css'

const PokemonHome = () => {
    const dispatch = useDispatch();
    // const pokemons = useSelector((state) => state.pokemons);
    useEffect(() => {
        dispatch(getPokemon());
    }, []);
    return null;
};

export default PokemonHome;