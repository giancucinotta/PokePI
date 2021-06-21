import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export const Nav = () => {
  return (
    <div>
      <div>
        <Link to='/'>
          <h2>PokePI</h2>
        </Link>
      </div>
      <div>
        <div>
          <Link to='/home'>
            HOME
          </Link>
        </div>
        <div>
          <Link to='/addpokemon'>
            CREATE POKEMON
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;