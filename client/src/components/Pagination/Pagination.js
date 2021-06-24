import React from 'react'

import './Pagination.css'

const Pagination = ({ pokemonPerPage, totalPokemon, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPokemon / pokemonPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='pagination'>
            {
                pageNumbers.map(number => (
                    <button className='button-pagination' key={number} onClick={() => paginate(number)}>{number}</button>
                ))
            }
        </div>
    )
}

export default Pagination;
