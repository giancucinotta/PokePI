import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { getPokemonByName, getPokemonByNameReset } from "../../actions/pokemon";
import Card from '../Card/Card';
import Nav from '../Nav/Nav';
import SearchBar from '../SearchBar/SearchBar';

import './PokemonSearch.css'

const PokemonByName = ({ match, pokemon, getPokemonByName, getPokemonByNameReset }) => {

  useEffect(() => {
    getPokemonByName(match.params.name)
    return () => { getPokemonByNameReset() }
  }, [])

  return (
    <div className="Pokemon-search">
      <Nav/>
      <SearchBar/>
      <Card img={ pokemon.img } name={ pokemon.name } id={ pokemon.id } type={ pokemon.type }/>
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