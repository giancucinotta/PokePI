import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';

const Card = ( props ) => {
  return (
    <div className='cards'>
      {
          <div className='card'>
            <div>
              <img src={props.img} alt='' className='cards-img'/>
              <div>
                <h5>{props.name}</h5>
              </div>
              <div>
                <p>{props.type}</p>
              </div>
              <Link to={`/home/detail/${props.id}`}>
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