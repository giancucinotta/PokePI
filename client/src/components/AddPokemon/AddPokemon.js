import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPokemon } from '../../actions/pokemon';
import Nav from '../Nav/Nav';
import { validate } from './validateInput';

import './AddPokemon.css'

export function AddPokemon({ types, addPokemon }) {
    const [input, setInput] = useState({
        name: '',
        type1: null,
        type2: null,
        hp: null,
        attack: null,
        defense: null,
        speed: null,
        weight: null,
        height: null,
        img: "https://play-lh.googleusercontent.com/GU2izEZOquAFv6oKKibJyq6yUYHaGSoiia6_A-K3RQ3Li56tMDTWoPdFxEotmjKVsuo"
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
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length === 0) {
            addPokemon(input);
            setInput({});
            alert("Pokemon created!");
        }
        else alert("Check required fields");
    };

    return (
        <div>
            <Nav />
            <div className='form-container'>
                <div className='form-container-container'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-items'>
                            <div className='form-items1'>
                                <label>Name:</label>
                            </div>
                            <div className='form-items2'>
                                <input className={errors.name && 'danger'} className='input-item' name="name" type={'text'} placeholder="Type a name here!" value={input.name} onChange={handleChange} />
                                {errors.name && (
                                    <p className='danger'>{errors.name}</p>
                                )}
                            </div>
                        </div>
                        <div className='form-items'>
                            <div className='form-items1'>
                                <label>First type</label>
                            </div>
                            <div className='form-items2'>
                                <select name="type1" value={input.type1} onChange={handleChange}>
                                    {types.map((types) =>
                                        <option value={types.id} key={types.name}>{types.name}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                        <div className='form-items'>
                            <div className='form-items1'>
                                <label>Second type (optional)</label>
                            </div>
                            <div className='form-items2'>
                                <select name="type2" value={input.type2} onChange={handleChange}>
                                    <option value="null">None</option>
                                    {types.map((types) =>
                                        <option value={types.id} key={types.name}>{types.name}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                        <div className='form-items'>
                            <div className='form-items1'>
                                <label>HP:</label>
                            </div>
                            <div className='form-items2'>
                                <input className={errors.hp && 'danger'} className='input-item' name="hp" type={'text'} placeholder="Type a number between 1-255!" value={input.hp} onChange={handleChange} />
                                {errors.hp && (
                                    <p className='danger'>{errors.hp}</p>
                                )}
                            </div>
                        </div>
                        <div className='form-items'>
                            <div className='form-items1'>
                                <label>Attack:</label>
                            </div>
                            <div className='form-items2'>
                                <input className={errors.attack && 'danger'} className='input-item' name="attack" type={'text'} placeholder="Type a number between 5-190!" value={input.attack} onChange={handleChange} />
                                {errors.attack && (
                                    <p className='danger'>{errors.attack}</p>
                                )}
                            </div>
                        </div>
                        <div className='form-items'>
                            <div className='form-items1'>
                                <label>Defense:</label>
                            </div>
                            <div className='form-items2'>
                                <input className={errors.defense && 'danger'} className='input-item' name="defense" type={'text'} placeholder="Type a number between 5-230!" value={input.defense} onChange={handleChange} />
                                {errors.defense && (
                                    <p className='danger'>{errors.defense}</p>
                                )}
                            </div>
                        </div>
                        <div className='form-items'>
                            <div className='form-items1'>
                                <label>Speed:</label>
                            </div>
                            <div className='form-items2'>
                                <input className={errors.speed && 'danger'} className='input-item' name="speed" type={'text'} placeholder="Type a number between 5-116!" value={input.speed} onChange={handleChange} />
                                {errors.speed && (
                                    <p className='danger'>{errors.speed}</p>
                                )}
                            </div>
                        </div>
                        <div className='form-items'>
                            <div className='form-items1'>
                                <label>Weight:</label>
                            </div>
                            <div className='form-items2'>
                                <input className={errors.weight && 'danger'} className='input-item' name="weight" type={'text'} placeholder="Type a number between 1-9999 kg!" value={input.weight} onChange={handleChange} />
                                {errors.weight && (
                                    <p className='danger'>{errors.weight}</p>
                                )}
                            </div>
                        </div>
                        <div className='form-items'>
                            <div className='form-items1'>
                                <label>Height:</label>
                            </div>
                            <div className='form-items2'>
                                <input className={errors.height && 'danger'} className='input-item' name="height" type={'text'} placeholder="Type a number between 1-200 dm!" value={input.height} onChange={handleChange} />
                                {errors.height && (
                                    <p className='danger'>{errors.height}</p>
                                )}
                            </div>
                        </div>
                        <div className='form-items'>
                            <div className='form-items1'>
                                <label>Enter an image URL here! (optional)</label>
                            </div>
                            <div className='form-items2'>
                                <input className='input-item' type="url" name="img" placeholder="http://example.com" value={input.img} onChange={handleChange} />
                            </div>
                        </div>
                        <button className='button-form' type='submit'>CREATE POKEMON</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

function mapDispatchToProps(dispatch) {
    return {
        addPokemon: (pokemon) => dispatch(addPokemon(pokemon)),
    };
}

function mapStateToProps(state) {
    return {
        pokemon_created: state.pokemon_created,
        types: state.types
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPokemon)