import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';

const Cards = ({ pokemons }) => {
  return (
    <div className='cards'>
      {
        pokemons.map(p => (
          <div key={p.id} className='cards-group'>
            <div>
              <img src={p.img} alt='' className='cards-img'/>
              <div>
                <h5>{p.name}</h5>
              </div>
              <div>
                <p>{p.types}</p>
              </div>
              <Link to={`/home/detail/${p.id}`}>
                <button type='submit'>
                  More Details
                </button>
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Cards;