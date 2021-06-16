import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { getPokemonByName } from "../../actions/pokemon";

import './Search.css'
// Traer las imagenes
const PokemonByName = ({ match, pokemon, getPokemonByName }) => {

  useEffect(() => {
    getPokemonByName(match.params.name)
  }, [])
  
  return (
    <div className="Pokemon-search">
      <div  style={{fontWeight: 'bold', textTransform: 'uppercase'}}>{pokemon.name}</div>
      <img src={pokemon.img}/>
      <div style={{fontWeight: 'bold'}}>Type: <div style={{fontWeight: 'normal', textTransform: 'uppercase'}}>{pokemon.type}</div></div>
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
    getPokemonByName: (pokemon) => dispatch(getPokemonByName(pokemon))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PokemonByName)