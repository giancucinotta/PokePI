import React from 'react';
import { Link } from 'react-router-dom';

import './CardDetail.css';

const CardDetail = (props) => {
    console.log(props.typ)
    return (
        <div className='cards-detail-container'>
            <div className='card-detail'>
                <div className='name-detail'>
                    <h5>{props.name}</h5>
                </div>
                <img src={props.img} alt='' className='img-detail' />
                <p className="id-detail">ID: {props.id}</p>
            </div>
            <div className='stats-detail'>
                <div>
                    <div>HP: {props.hp}</div>
                    <div>Attack: {props.attack}</div>
                    <div>Defense: {props.defense}</div>
                    <div>Speed: {props.speed}</div>
                    <div>Weight: {props.weight}</div>
                    <div>Height: {props.height}</div>
                    <div>Type: {props.typ?.map((t) => {
                        return<p className='p-detail'>{t} </p>})}</div>
                    <Link to={`/home`}>
                        <button type='submit' className='btn-grad-detail'>
                            Go Back
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardDetail;
