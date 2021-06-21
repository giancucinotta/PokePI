import React, { useState } from 'react'
import { useSelector } from "react-redux";
import Cards from '../Card/Cards';
import Pagination from '../Pagination/Pagination';
import Nav from '../Nav/Nav';
import SearchBar from '../SearchBar/SearchBar';
import './Home.css'

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pokemonPerPage = 12;
    
    const pokemons = useSelector((state) => state.pokemons);

    const indexOfLastPokemon = currentPage * pokemonPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage
    const currentPokemon = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <Nav/>
            <SearchBar/>
            <Cards
                pokemons={currentPokemon}
            />
            <Pagination
                pokemonPerPage={pokemonPerPage}
                totalPokemon={pokemons.length}
                paginate={paginate}
            />
        </div>
    )
};

export default Home;