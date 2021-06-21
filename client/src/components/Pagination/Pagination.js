import React from 'react'

const Pagination = ({ pokemonPerPage, totalPokemon, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPokemon / pokemonPerPage); i++){
        pageNumbers.push(i);
    }
    
    return (
        <nav>
            <ul>
                {
                    pageNumbers.map(number => (
                        <li key={number}>
                            <a onClick={() => paginate(number)}/>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Pagination;
