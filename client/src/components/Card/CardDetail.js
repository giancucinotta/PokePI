import React from 'react';
import { Link } from 'react-router-dom';

import './CardDetail.css';

const CardDetail = (props) => {
    return (
        <div className='cards-container'>
            <div className='card'>
                <div className='name'>
                    <h5>{props.name}</h5>
                <p>ID: {props.id}</p>
                </div>
                <img src={props.img} alt='' className='img' />
            </div>
            <div className='stats'>
                <div>
                    <div>HP: {props.hp}</div>
                    <div>Attack: {props.attack}</div>
                    <div>Defense: {props.defense}</div>
                    <div>Speed: {props.speed}</div>
                    <div>Weight: {props.weight}</div>
                    <div>Height: {props.height}</div>
                    <div>Type: {props.type}</div>
                    <Link to={`/home`}>
                        <button type='submit' className='btn-grad2'>
                            Go Back
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardDetail;
