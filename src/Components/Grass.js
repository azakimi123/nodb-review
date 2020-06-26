import React, {Component} from 'react';

class Grass extends Component {

    handleCatch = () => {
        const {pokemon} = this.props;
        let newPokemon = {
            name: pokemon.name,
            img: pokemon.sprites.front_default
        }
        this.props.catchFn(newPokemon);
        this.props.refreshFn();
    }


    render(){
        return (
            <div onClick={this.handleCatch}>
                <img src={this.props.pokemon.sprites.front_default} alt={this.props.pokemon.name}/>
                <p>{this.props.pokemon.name}</p>
            </div>
        )
    }
}

export default Grass;