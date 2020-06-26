//Class Components are components capable of holding state and using lifecycle methods
//To build one, follow these steps:
//1. import React, {Component} from 'react
//2. Create a class that extends Component
//3. Return a JSX display using render
//4. Export the component

//To view how to build a functional component, visit ./Components/Header.js

import React, {Component} from 'react';
import Header from './Components/Header';
import Finder from './Components/Finder';
import Pokedex from './Components/Pokedex';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      caughtPokemon: []
    }
    this.catchPokemon = this.catchPokemon.bind(this);
  }

  componentDidMount(){
    //componentDidMount is a lifecycle method. It will fire after the first invocation of render
    //in the component. This is a great method for retrieving data from a server that you need 
    //in your component right away.
    axios.get('/api/caught-pokemon')
    .then( res => {
      this.setState({caughtPokemon: res.data})
    })
    .catch(err => console.log(err));
  }

  catchPokemon(pokemon) {
    axios.post('/api/caught-pokemon', {pokemon: pokemon})
    .then( res => {
      this.setState({caughtPokemon: res.data})
    })
    .catch(err => console.log(err))
  }

  editName = (id, newName) => {
    let body = {name: newName};

    axios.put(`/api/caught-pokemon/${id}`, body)
    .then(res => {
      this.setState({caughtPokemon: res.data})
    })
    .catch(err => console.log(err));
  }

  releasePokemon = (id) => {
    axios.delete(`/api/caught-pokemon/${id}`)
    .then(res => {
      this.setState({caughtPokemon: res.data})
    })
    .catch(err => console.log(err));
  }

  render(){
    //render is the only required lifecycle method in class components, as it is required to return
    //a JSX display from a component. All JSX in a component MUST be wrapped by a parent element.
    console.log(this.state.caughtPokemon)
    return (
      <div className="App">

        <Header />
        <Finder 
          catchFn={this.catchPokemon}/>
        <Pokedex 
          caughtPokemon={this.state.caughtPokemon}
          nameFn={this.editName}
          releaseFn={this.releasePokemon}/>
  
      </div>
    )
  }
}

export default App;
