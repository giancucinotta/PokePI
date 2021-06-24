import React from 'react';
import Card from './Card';

import './Cards.css';

const Cards = ({ pokemons }) => {
  return (
    <div className='cards'>
      {
        pokemons.map((pokemon, i) => (
          <Card pokemon={pokemon} index={i}/>
        )
        )}
    </div>
  );
};

export default Cards;