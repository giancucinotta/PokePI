import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { getPokemonByName, getPokemonByNameReset } from "../../actions/pokemon";
import Card from '../Card/Card';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';
import notFound from './notFound.gif';

import './PokemonSearch.css'

const PokemonByName = ({ match, pokemon, getPokemonByName, getPokemonByNameReset }) => {

  useEffect(() => {
    getPokemonByName(match.params.name)
    return () => { getPokemonByNameReset() }
  }, [])


  return (
    <div className="pokemon-search">
      <Nav />
      <div className="search-card">
        {pokemon.name ?
          <Card pokemon={pokemon} />
          : <div>
            <p>Pokemon not found!!</p>
            <img className='notfound' src={notFound} />
          </div>}
        <Link to={`/home`}>
          <button type='submit' className='btn-grad-search'>
            Go Back
          </button>
        </Link>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    pokemon: state.pokemon_search,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPokemonByName: (pokemon) => dispatch(getPokemonByName(pokemon)),
    getPokemonByNameReset: () => dispatch(getPokemonByNameReset())
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PokemonByName)