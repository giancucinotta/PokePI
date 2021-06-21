import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPokemon } from '../../actions/pokemon'
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
            <Nav/>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input className={errors.name && 'danger'} name="name" type={'text'} placeholder="Type a name here!" value={input.name} onChange={handleChange} />
                    {errors.name && (
                        <p className='danger'>{errors.name}</p>
                    )}
                </div>
                <div>
                    <label>First type</label>
                    <select name="type1" value={input.type1} onChange={handleChange}>
                        {types.map((types) =>
                            <option value={types.id} key={types.name}>{types.name}</option>
                        )}
                    </select>
                </div>
                <div>
                    <label>Second type (optional)</label>
                    <select name="type2" value={input.type2} onChange={handleChange}>
                        <option value="null">None</option>
                        {types.map((types) =>
                            <option value={types.id} key={types.name}>{types.name}</option>
                        )}
                    </select>
                </div>
                <div>
                    <label>HP</label>
                    <input className={errors.hp && 'danger'} name="hp" type={'text'} placeholder="Type a number between 1-255!" value={input.hp} onChange={handleChange} />
                    {errors.hp && (
                        <p className='danger'>{errors.hp}</p>
                    )}
                </div>
                <div>
                    <label>Attack</label>
                    <input className={errors.attack && 'danger'} name="attack" type={'text'} placeholder="Type a number between 5-190!" value={input.attack} onChange={handleChange} />
                    {errors.attack && (
                        <p className='danger'>{errors.attack}</p>
                    )}
                </div>
                <div>
                    <label>Defense</label>
                    <input className={errors.defense && 'danger'} name="defense" type={'text'} placeholder="Type a number between 5-230!" value={input.defense} onChange={handleChange} />
                    {errors.defense && (
                        <p className='danger'>{errors.defense}</p>
                    )}
                </div>
                <div>
                    <label>Speed</label>
                    <input className={errors.speed && 'danger'} name="speed" type={'text'} placeholder="Type a number between 5-116!" value={input.speed} onChange={handleChange} />
                    {errors.speed && (
                        <p className='danger'>{errors.speed}</p>
                    )}
                </div>
                <div>
                    <label>Weight</label>
                    <input className={errors.weight && 'danger'} name="weight" type={'text'} placeholder="Type a number between 1-9999 kg!" value={input.weight} onChange={handleChange} />
                    {errors.weight && (
                        <p className='danger'>{errors.weight}</p>
                    )}
                </div>
                <div>
                    <label>Height</label>
                    <input className={errors.height && 'danger'} name="height" type={'text'} placeholder="Type a number between 1-200 dm!" value={input.height} onChange={handleChange} />
                    {errors.height && (
                        <p className='danger'>{errors.height}</p>
                    )}
                </div>
                <div>
                    <label>Enter an image URL here! (optional)</label>
                    <input type="url" name="img" placeholder="http://example.com" value={input.img} onChange={handleChange}/>
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
        pokemon_created: state.pokemon_created,
        types: state.types
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPokemon)