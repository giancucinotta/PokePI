import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { getPokemonDetail } from "../../actions/pokemon";

import './PokemonDetail.css'
// Traer las imagenes
const PokemonDetail = ({ match, pokemon, getPokemonDetail }) => {

  useEffect(() => {
    getPokemonDetail(match.params.id)
  }, [])
  

  return (
    <div>
      <div className="Pokemon-detail" style={{fontWeight: 'bold', textTransform: 'uppercase'}}>{pokemon.name}</div>
      <img src={pokemon.img1}/>
      <img src={pokemon.img2}/>
      <div style={{fontWeight: 'bold'}}>HP: <div style={{fontWeight: 'normal'}}>{pokemon.hp}</div></div>
      <div style={{fontWeight: 'bold'}}>Attack: <div style={{fontWeight: 'normal'}}>{pokemon.attack}</div></div>
      <div style={{fontWeight: 'bold'}}>Defense: <div style={{fontWeight: 'normal'}}>{pokemon.defense}</div></div>
      <div style={{fontWeight: 'bold'}}>Speed: <div style={{fontWeight: 'normal'}}>{pokemon.speed}</div></div>
      <div style={{fontWeight: 'bold'}}>Weight: <div style={{fontWeight: 'normal'}}>{pokemon.weight}</div></div>
      <div style={{fontWeight: 'bold'}}>Height: <div style={{fontWeight: 'normal'}}>{pokemon.height}</div></div>
      <div style={{fontWeight: 'bold'}}>Type: <div style={{fontWeight: 'normal', textTransform: 'uppercase'}}>{pokemon.type}</div></div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    pokemon: state.pokemon_detail,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getPokemonDetail: (pokemon) => dispatch(getPokemonDetail(pokemon)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)