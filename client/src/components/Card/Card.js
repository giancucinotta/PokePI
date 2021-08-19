import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';

const Card = (props) => {
  return (
    <div>
      {
        <div className='card'>
          <div>
            <img src={props.pokemon.img} alt='' className='img' />
            <div className='name'>
              <h5>{props.pokemon.name}</h5>
            </div>
            <div className='type-container'>{props.pokemon.typ.length > 1
                    ? <p>Types: <br></br>
                      {props.pokemon.typ[0]} & {props.pokemon.typ[1]}</p>
                    : <p>Type: <br></br> 
                      {props.pokemon.typ[0]}
                    </p>}
            </div>
            <Link to={`/home/detail/${props.pokemon.id}`}>
              <button type='submit'>
                More Details
              </button>
            </Link>
          </div>
        </div>
      }
    </div>
  );
};

export default Card;