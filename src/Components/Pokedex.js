import React from 'react';
import Pokemon from './Pokemon'

const Pokedex = props => {
    const mappedPokemon = props.caughtPokemon.map((pokemon, i) => (
        <Pokemon 
        key={i}
        pokemon={pokemon}
        nameFn={props.nameFn}
        releaseFn={props.releaseFn}/>
    ))
    return (
        <div>
            <h1>Pokedex</h1>
            <div className='poke-flex'>
                {mappedPokemon}
            </div>

        </div>
    )
}

export default Pokedex;