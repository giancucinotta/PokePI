import React from 'react';
import { Link } from 'react-router-dom';
import POKEPI2 from './POKEPI2.png';
import './LandingPage.css';

const LandingPage = () => {

    return (
        <div className='landing_container'>
            <img src={POKEPI2} className='landing-logo-img' alt=''/>
            <h3 className='enter-text'>
                E<br></br>
                N<br></br>
                T<br></br>
                E<br></br>
                R<br></br>
                <br></br>
                T<br></br>
                H<br></br>
                E<br></br>
                <br></br>
                P<br></br>
                O<br></br>
                K<br></br>
                E<br></br>
                P<br></br>
                I<br></br>
                <br></br>
                W<br></br>
                O<br></br>
                R<br></br>
                L<br></br>
                D<br></br>
            </h3>
            <button className='button_home'><Link to='/home' className='link_text'> HOME </Link></button>
            <p className='created-text'>© 2021 Gianfranco Cucinotta</p>
        </div>
    )
};

export default LandingPage;