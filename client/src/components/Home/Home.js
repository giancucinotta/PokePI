import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { getPokemon } from "../../actions/pokemon";

import './Home.css'

const Home = ({ getPokemon }) => {
    useEffect(() => {
        getPokemon()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null
};

function mapStateToProps(state) {
    return {
        pokemons: state.pokemons,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getPokemon: () => dispatch(getPokemon())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)