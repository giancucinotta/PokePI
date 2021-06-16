import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPokemon } from '../../actions/pokemon'
import { validate } from './validateInput';

/*Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
Número de Pokemon (id)
Estadísticas (vida, fuerza, defensa, velocidad)
Altura y peso*/
export function AddPokemon({ addPokemon }) {
    const [input, setInput] = useState({
        name: '',
        img: null,
        type1: null,
        type2: null,
        hp: null,
        attack: null,
        defense: null,
        speed: null,
        weight: null,
        height: null
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addPokemon(input);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input name="name" type={'text'} placeholder="Type a name here!" value={input.name} onChange={handleChange} />
                </div>
                <div>
                    <label>First type</label>
                    <select name="type1" value={input.type1} onChange={handleChange}>
                        <option value="null">None</option>
                        <option value="1">Normal</option>
                        <option value="2">Fighting</option>
                        <option value="3">Flying</option>
                        <option value="4">Poison</option>
                        <option value="5">Ground</option>
                        <option value="6">Rock</option>
                        <option value="7">Bug</option>
                        <option value="8">Ghost</option>
                        <option value="9">Steel</option>
                        <option value="10">Fire</option>
                        <option value="11">Water</option>
                        <option value="12">Grass</option>
                        <option value="13">Electric</option>
                        <option value="14">Psychic</option>
                        <option value="15">Ice</option>
                        <option value="16">Dragon</option>
                        <option value="17">Dark</option>
                        <option value="18">Fairy</option>
                        <option value="19">Unknown</option>
                        <option value="20">Shadow</option>
                    </select>
                </div>
                <div>
                    <label>Second type</label>
                    <select name="type2" value={input.type2} onChange={handleChange}>
                        <option value="null">None</option>
                        <option value="1">Normal</option>
                        <option value="2">Fighting</option>
                        <option value="3">Flying</option>
                        <option value="4">Poison</option>
                        <option value="5">Ground</option>
                        <option value="6">Rock</option>
                        <option value="7">Bug</option>
                        <option value="8">Ghost</option>
                        <option value="9">Steel</option>
                        <option value="10">Fire</option>
                        <option value="11">Water</option>
                        <option value="12">Grass</option>
                        <option value="13">Electric</option>
                        <option value="14">Psychic</option>
                        <option value="15">Ice</option>
                        <option value="16">Dragon</option>
                        <option value="17">Dark</option>
                        <option value="18">Fairy</option>
                        <option value="19">Unknown</option>
                        <option value="20">Shadow</option>
                    </select>
                </div>
                <div>
                    <label>HP</label>
                    <input name="hp" type={'text'} placeholder="Type a number between 1-255!" value={input.hp} onChange={handleChange} />
                </div>
                <div>
                    <label>Attack</label>
                    <input name="attack" type={'text'} placeholder="Type a number between 5-190!" value={input.attack} onChange={handleChange} />
                </div>
                <div>
                    <label>Defense</label>
                    <input name="defense" type={'text'} placeholder="Type a number between 5-230!" value={input.defense} onChange={handleChange} />
                </div>
                <div>
                    <label>Speed</label>
                    <input name="speed" type={'text'} placeholder="Type a number between 5-116!" value={input.speed} onChange={handleChange} />
                </div>
                <div>
                    <label>Weight</label>
                    <input name="weight" type={'text'} placeholder="Type a number between 100-999900 gram!" value={input.weight} onChange={handleChange} />
                </div>
                <div>
                    <label>Height</label>
                    <input name="height" type={'text'} placeholder="Type a number between 10-2000 cm!" value={input.height} onChange={handleChange} />
                </div>
                <button type='submit'>CREATE POKEMON</button>
            </form>
        </div>
    )
};

function mapDispatchToProps(dispatch) {
    return {
      addPokemon: (pokemon) => dispatch(addPokemon(pokemon))
    };
  }

function mapStateToProps(state) {
    return {
        pokemon_created: state.pokemon_created
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPokemon)