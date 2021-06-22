import React from 'react';
import { Link } from 'react-router-dom';
import POKEPI2 from './POKEPI2.png';
import './LandingPage.css';

const LandingPage = () => {

    return (
        <div className='landing'>
            <div className='logo-container'>
            <img src={POKEPI2} className='landing-logo-img' alt='' />
            <div></div>
            <div></div>
            </div>
            <div className='landing_container'>
                <h3 className='enter-text'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P<br></br>
                    E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O<br></br>
                    N&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K<br></br>
                    T&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E<br></br>
                    E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P<br></br>
                    R&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I<br></br>
                    <br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;W<br></br>
                    T&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O<br></br>
                    H&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R<br></br>
                    E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;L<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D<br></br>
                </h3>
                <div className='button-container'>
                    <div></div>
                    <button className='btn-grad'><Link to='/home' className='link_text'> HOME </Link></button>
                </div>
                <p className='created-text'>© 2021 Gianfranco Cucinotta</p>
            </div>
        </div>
    )
};

export default LandingPage;