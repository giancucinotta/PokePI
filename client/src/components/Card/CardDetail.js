import React from 'react';
import { Link } from 'react-router-dom';

const CardDetail = (props) => {
    return (
        <div className='cards'>
            {
                <div className='card'>
                    <div>
                        <div className='name'>
                            <h5>{props.name}</h5>
                        </div>
                        <img src={props.img} alt=''/>
                        <div className='stats'>
                            <div>HP: {props.hp}</div>
                            <div>Attack: {props.attack}</div>
                            <div>Defense: {props.defense}</div>
                            <div>Speed: {props.speed}</div>
                            <div>Weight: {props.weight}</div>
                            <div>Height: {props.height}</div>
                            <div>Type: {props.type}</div>
                        </div>
                        <Link to={`/home`}>
                            <button type='submit'>
                                Go Back
                            </button>
                        </Link>
                    </div>
                </div>
            }
        </div>
    );
};

export default CardDetail;
