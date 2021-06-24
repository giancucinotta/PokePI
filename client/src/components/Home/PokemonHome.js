import { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { getPokemon } from "../../actions/pokemon";

const PokemonHome = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPokemon());
    }, []);
    return null;
};

export default PokemonHome;