import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Filters from '../Filters/FilterHandlers';

import './SearchBar.css'

export const SearchBar = (props) => {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            setName({})
        }
    };


    return (
        <div className='search-bar-container'>
            <h2>Search a Pokemon</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        className='input'
                        type='text'
                        autoComplete='off'
                        onChange={handleChange}
                    />
                    <div>
                        <Link to={`/home/${name}`}>
                            <button type='submit'>
                                Search
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
            <div>
                <Filters setPage={props.setPage}/>
            </div>
        </div >
    );
};


export default SearchBar;