import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { getPokemonDetail, getPokemonDetailReset } from "../../actions/pokemon";
import Nav from '../Nav/Nav';
import CardDetail from '../Card/CardDetail';

const PokemonDetail = ({ match, pokemon_detail, getPokemonDetailReset, getPokemonDetail }) => {

  useEffect(() => {
    getPokemonDetail(match.params.id)
    return () => { getPokemonDetailReset() }
  }, [])

  return (
    <div>
      <Nav/>
      <CardDetail 
      id={pokemon_detail.id}
      name={pokemon_detail.name}
      img={pokemon_detail.img}
      hp={pokemon_detail.hp}
      attack={pokemon_detail.attack}
      defense={pokemon_detail.defense}
      speed={pokemon_detail.speed}
      weight={pokemon_detail.weight}
      height={pokemon_detail.height}
      typ={pokemon_detail.typ}
      />
    </div>
  )
};

function mapStateToProps(state) {
  return {
    pokemon_detail: state.pokemon_detail,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getPokemonDetail: (pokemon) => dispatch(getPokemonDetail(pokemon)),
    getPokemonDetailReset: () => dispatch(getPokemonDetailReset())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);