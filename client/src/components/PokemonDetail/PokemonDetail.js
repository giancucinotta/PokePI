import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { getPokemonDetail } from "../../actions/pokemon";

import './PokemonDetail.css'
// Traer las imagenes
const PokemonDetail = ({ match, pokemon_detail, getPokemonDetail }) => {

  useEffect(() => {
    getPokemonDetail(match.params.id)
  }, [])
  console.log("pokemon detail --->", pokemon_detail)
  
  return (
    <div>
      <div className="Pokemon-detail" style={{fontWeight: 'bold', textTransform: 'uppercase'}}>{pokemon_detail.name}</div>
      <img src={pokemon_detail.img}/>
      <div style={{fontWeight: 'bold'}}>HP: <div style={{fontWeight: 'normal'}}>{pokemon_detail.hp}</div></div>
      <div style={{fontWeight: 'bold'}}>Attack: <div style={{fontWeight: 'normal'}}>{pokemon_detail.attack}</div></div>
      <div style={{fontWeight: 'bold'}}>Defense: <div style={{fontWeight: 'normal'}}>{pokemon_detail.defense}</div></div>
      <div style={{fontWeight: 'bold'}}>Speed: <div style={{fontWeight: 'normal'}}>{pokemon_detail.speed}</div></div>
      <div style={{fontWeight: 'bold'}}>Weight: <div style={{fontWeight: 'normal'}}>{pokemon_detail.weight}</div></div>
      <div style={{fontWeight: 'bold'}}>Height: <div style={{fontWeight: 'normal'}}>{pokemon_detail.height}</div></div>
      <div style={{fontWeight: 'bold'}}>Type: <div style={{fontWeight: 'normal', textTransform: 'uppercase'}}>{pokemon_detail.type}</div></div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    pokemon_detail: state.pokemon_detail,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getPokemonDetail: (pokemon) => dispatch(getPokemonDetail(pokemon))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)