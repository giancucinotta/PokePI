import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Filters from '../Filters/FilterHandlers';

export const SearchBar = () => {
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
        <div>
            <div>
                <h2>Search a Pokemon</h2>
            </div>
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
            <Filters/>
        </div >
    );
};


export default SearchBar;