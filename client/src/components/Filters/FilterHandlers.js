import React from 'react';
import { connect } from 'react-redux';
import { pokemonOrder, pokemonByOrigin, pokemonByType } from './filterActions';

const Filters = ({ types, pokemons, pokemonByType, pokemonByOrigin, pokemonOrder, setPage }) => {
	
	
	const handleByType = (e) => {
		pokemonByType(e.target.value, pokemons);
	};

	const handleByOrigin = (e) => {
		pokemonByOrigin(e.target.value, pokemons);
		setPage(1);

	};

	const handleOrder = (e) => {
		pokemonOrder(e.target.value, pokemons);
	};

	const handleChange = (e) => {
		if(e.target.value === 'API' || e.target.value === 'DB' || e.target.value === 'All'){
			handleByOrigin(e);
		} else {
			handleByType(e);
		}
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
				<option value='Hp Asc'>Hp Asc</option>
				<option value='Hp Des'>Hp Des</option>
			</select>
			<select name='filters' onChange={handleChange}>
				<optgroup label="By origin">
					<option default value='All'>All</option>
					<option value='API' group='origin'>Original</option>
					<option value='DB' group='origin'>Created</option>
				</optgroup>
				<optgroup label="By type">
					<option default>All</option>
					{types &&
						types.map((type, i) => (
							<option key={i} value={type.name}>
								{type.name}
							</option>
						))}
				</optgroup>
			</select>
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);