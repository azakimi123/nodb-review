import React, {Component} from 'react';
import axios from 'axios';
import Grass from './Grass';

class Finder extends Component {
    constructor(props){
        super(props);
        this.state = {
            wildPokemon: []
        }
    }

    componentDidMount() {
        this.getWildPokemon();

    }

    getWildPokemon = () => {
        axios.get('/api/wild-pokemon')
        .then(res => {
            this.setState({wildPokemon: res.data})
        })
        .catch(err => console.log(err))
    }


    render(){
        console.log(this.state.wildPokemon)
        const mappedPokemon = this.state.wildPokemon.map((pokemon, i) => (
            <Grass 
                key={i}
                pokemon={pokemon} 
                catchFn={this.props.catchFn}
                refreshFn={this.getWildPokemon}/>
        ))
        return (
            <div className='poke-flex'>
                {mappedPokemon}
            </div>
        )
    }
}

export default Finder;