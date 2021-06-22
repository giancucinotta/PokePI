import React from 'react';
import { Link } from 'react-router-dom';
import POKEPI2 from './POKEPI2.png';

import './Nav.css';

export const Nav = () => {
  return (
    <div className='nav-container'>
      <div>
        <Link to='/'>
          <img src={POKEPI2} className='nav-logo-img' alt='' />
        </Link>
      </div>
      <div className='links-container'>
          <div className='home-link'>
            <Link to='/home'>
              HOME
            </Link>
          </div>
          <div className='create-link'>
            <Link to='/addpokemon'>
              CREATE POKEMON
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;