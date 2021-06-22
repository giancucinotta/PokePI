import React from 'react';
import { connect } from 'react-redux';
import { pokemonOrder, pokemonByOrigin, pokemonByType, resetFilters } from './filterActions';

const Filters = ({ types, pokemons, pokemonByType, pokemonByOrigin, pokemonOrder }) => {
	const handleByType = (e) => {
		pokemonByType(e.target.value, pokemons);
	};

	const handleByOrigin = (e) => {
		pokemonByOrigin(e.target.value, pokemons);
	};

	const handleOrder = (e) => {
		pokemonOrder(e.target.value, pokemons);
	};

	const handleReset = () => {
		resetFilters();
	}
	return (
		<div>
			<select name='Filter' onChange={handleOrder}>
				<option default>Order by...</option>
				<option value='All'>All</option>
				<option value='A-Z'>A-Z</option>
				<option value='Z-A'>Z-A</option>
				<option value='Attack Asc'>More Attack</option>
				<option value='Attack Des'>Less Attack</option>
			</select>
			<select name='Type' onChange={handleByType}>
				<option default>All</option>
				{types &&
					types.map((type, i) => (
						<option key={i} value={type.name}>
							{type.name}
						</option>
					))}
			</select>
			<select name='Origin' onChange={handleByOrigin}>
				<option default value='All'>All</option>
				<option value='API'>Original</option>
				<option value='DB'>Created</option>
			</select>
			<button type='submit' onChange={handleReset}>Reset Filters</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		types: state.types,
		pokemons: state.pokemons
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		pokemonByType: (type, pokemons) => dispatch(pokemonByType(type, pokemons)),
		pokemonByOrigin: (by, pokemons) => dispatch(pokemonByOrigin(by, pokemons)),
		pokemonOrder: (by, pokemons) => dispatch(pokemonOrder(by, pokemons)),
		resetFilters: () => dispatch(resetFilters())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);