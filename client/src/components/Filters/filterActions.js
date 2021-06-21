export const POKEMONS_ASC = 'POKEMONS_ASC';
export const POKEMONS_DESC = 'POKEMONS_DESC';
export const ATTACK_ASC = 'ATTACK_ASC';
export const ATTACK_DESC = 'ATTACK_DESC';
export const ONLY_API = 'ONLY_API';
export const ONLY_DB = 'ONLY_DB';
export const ALL = 'ALL';
export const BY_TYPE = 'BY_TYPE';
export const RESET = 'RESET';

export const pokemonOrder = (by) => (dispatch, getState) => {
	const filtered = getState().filtered_pokemon.slice()
	const filterBy = getState().filtered_by
	const pokemon = getState().pokemons.slice()

	switch (by) {
		case 'A-Z':
			if (filterBy === 'All') {
				const orderedPokemon = pokemon.sort(
					(a, b) => {
						if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
						if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
						return 0
					}
				);
				dispatch({
					type: POKEMONS_ASC,
					payload: {
						orderedPokemon,
						name: by
					}
				})
			}
			else {
				const orderedPokemon = filtered.sort(
					(a, b) => {
						if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
						if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
						return 0
					}
				);
				dispatch({
					type: POKEMONS_ASC,
					payload: {
						orderedPokemon,
						name: by
					}
				})
			}
			break;

		case 'Z-A':
			if (filterBy === 'All') {
				const orderedPokemon = pokemon.sort(
					(a, b) => {
						if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
						if (a.name.toLowerCase() > b.name.toLowerCase()) return -1
						return 0
					}
				);
				dispatch({
					type: POKEMONS_DESC,
					payload: {
						orderedPokemon,
						name: by
					}
				})
			} else {
				const orderedPokemon = filtered.sort(
					(a, b) => {
						if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
						if (a.name.toLowerCase() > b.name.toLowerCase()) return -1
						return 0
					}
				);
				dispatch({
					type: POKEMONS_DESC,
					payload: {
						orderedPokemon,
						name: by
					}
				})
			}
			break;

		case 'Attack Asc':
			if (filterBy === 'All') {
				const orderedPokemon = pokemon.sort(
					(a, b) => a.attack - b.attack
				)
				dispatch({
					type: ATTACK_ASC,
					payload: {
						orderedPokemon,
						name: by
					}
				})
			} else {
				const orderedPokemon = filtered.sort(
					(a, b) => a.attack - b.attack
				)
				dispatch({
					type: ATTACK_ASC,
					payload: {
						orderedPokemon,
						name: by
					}
				})
			}
			break;

		case 'Attack Des':
			if (filterBy === 'All') {
				const orderedPokemon = pokemon.sort(
					(a, b) => b.attack - a.attack
				)
				dispatch({
					type: ATTACK_DESC,
					payload: {
						orderedPokemon,
						name: by
					}
				})
			} else {
				const orderedPokemon = filtered.sort(
					(a, b) => b.attack - a.attack
				)
				dispatch({
					type: ATTACK_DESC,
					payload: {
						orderedPokemon,
						name: by
					}
				})
			}
			break;

		default:
			return pokemon
	}
};

export const pokemonByOrigin = (by) => (dispatch, getState) => {
	const filtered = getState().filtered_pokemon.slice()
	const filteredBy = getState().filtered_by
	const pokemon = getState().pokemons.slice()
	switch (by) {
		case 'API':
			if (filteredBy === 'All') {
				const orderedByOrigin = pokemon.filter((el) => typeof el.id === 'number');
				dispatch({
					type: ONLY_API,
					payload: {
						orderedByOrigin,
						name: by
					}
				})
			} else {
				const orderedByOrigin = filtered.filter((el) => typeof el.id === 'number');
				dispatch({
					type: ONLY_API,
					payload: {
						orderedByOrigin,
						name: by
					}
				})
			}
			break;

		case 'DB':
			if (filteredBy === 'All') {
				let reg_ex = /-/;
				const orderedByOrigin = pokemon.filter((el) => el.id.toString().search(reg_ex) !== -1);
				dispatch({
					type: ONLY_DB,
					payload: {
						orderedByOrigin,
						name: by
					}
				})
			} else {
				let reg_ex = /-/;
				const orderedByOrigin = filtered.filter((el) => el.id.toString().search(reg_ex) !== -1);
				dispatch({
					type: ONLY_DB,
					payload: {
						orderedByOrigin,
						name: by
					}
				})
			}
			break;

		case 'All':
			dispatch({
				type: ALL,
				payload: {
					pokemon,
					name: by
				}
			})
			break;

		default:
			return pokemon;
	}
};
export const pokemonByType = (type) => (dispatch, getState) => {
	const pokemon = getState().pokemons.slice()
	const filtered = getState().filtered_pokemon.slice()
	const filteredBy = getState().filtered_by

	if (filteredBy === 'All') {
		let arrayByType = pokemon.filter((poke, i) =>
			poke.types.length
				? poke.types[0].name === type
					? true
					: poke.types.length > 1
						? poke.types[1].name === type
							? true
							: false
						: false
				: false
		);
		dispatch({
			type: BY_TYPE,
			payload: {
				arrayByType,
				name: type
			}
		});
	} else {
		let arrayByType = filtered.filter((poke, i) =>
			poke.types.length
				? poke.types[0].name === type
					? true
					: poke.types.length > 1
						? poke.types[1].name === type
							? true
							: false
						: false
				: false
		);
		dispatch({
			type: BY_TYPE,
			payload: {
				arrayByType,
				name: type
			}
		});
	}
};

export const resetFilters = () => (dispatch) => {
	dispatch({
		type: RESET
	})
};


// // Functions
// /*! Ordenar elementos del arreglo por una propiedad numérica. */
// const orderByNumber= (array, property,sortOrder) =>{
// 	// Primero se verifica que la propiedad sortOrder tenga un dato válido.
// 	if (sortOrder!==-1 && sortOrder!==1) sortOrder=1;
// 	array.sort(function(a,b){
// 	  // La función de ordenamiento devuelve la comparación entre property de a y b.
// 	  // El resultado será afectado por sortOrder.
// 	  return (a[property]-b[property])*sortOrder;
// 	})
//   }
//   /*! Ordenar elementos del arreglo por una propiedad de tipo String */
//   const orderByString= (array, property, sortOrder, ignoreCase) => {
// 	if (sortOrder!==-1 && sortOrder!==1) sortOrder=1;
// 	array.sort(function(a,b){
// 	  var stringA=a[property],stringB=b[property];
// 	  // Si un valor es null o undefined, se convierte a cadena vacía.
// 	  if (stringA===null) stringA = '';
// 	  if (stringB===null) stringB = '';
// 	  // Si ignoreCase es true, se convierten ambas variables a minúsculas.
// 	  if (ignoreCase===true){stringA=stringA.toLowerCase();stringB=stringB.toLowerCase()}
// 	  var res = 0;
// 	  if (stringA<stringB) res = -1;
// 	  else if (stringA>stringB) res = 1;
// 	  return res*sortOrder;
// 	})
//   }