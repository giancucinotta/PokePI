import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import Cards from '../Card/Cards';
import Pagination from '../Pagination/Pagination';
import Nav from '../Nav/Nav';
import SearchBar from '../SearchBar/SearchBar';
import PokemonHome from './PokemonHome';

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pokemonPerPage = 12;

    const pokemons = useSelector((state) => state.pokemons);
    const filtered = useSelector((state) => state.filteredPokemon);
    const filteredBy = useSelector((state) => state.filtered_by);
    const orderedBy = useSelector((state) => state.ordered_by);

    const [allPokemons, setAllPokemons] = useState([]);
    
    const indexOfLastPokemon = currentPage * pokemonPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
    const currentPokemon = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    useEffect(() => {
        if (filteredBy === 'All' && orderedBy === "All") {
            setAllPokemons(pokemons?.slice());
        } else {
            setAllPokemons(filtered?.slice());
        }
    }, [filteredBy, orderedBy, pokemons, filtered]);
    
    
    return (
        <div className='home-container'>
            <Nav/>
            <SearchBar setPage={setCurrentPage}/>
            <PokemonHome/>
            <div className='cards-container-home'>
            <Cards className='cards-home'
                pokemons={currentPokemon}
            />
            </div>
            <Pagination
                pokemonPerPage={pokemonPerPage}
                totalPokemon={allPokemons.length}
                paginate={paginate}
            />
        </div>
    )
};

export default Home;