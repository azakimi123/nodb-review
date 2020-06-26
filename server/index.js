//When building a server with Node.js and Express.js, you need to do the following:
//1. Require Express - const express = require('express');
//2. Initialize an instance of express and save it to a variable - const app = express();
//3. Use middleware to invoke your JSON parser - app.use(express.json());
//4. Use app.listen to define where the server should listen for requests - 
//   app.listen(4444, () => console.log(`Server running on 4444`))

const express = require('express');
const grassCtrl = require('./controllers/grassCtrl');
const pokeCtrl = require('./controllers/pokemonCtrl');

const app = express();

app.use(express.json());

//grassCtrl Endpoints
//get three random pokemon from the API
app.get('/api/wild-pokemon', grassCtrl.getWildPokemon);

//pokemonCtrl Endpoints
app.get('/api/caught-pokemon', pokeCtrl.getCaughtPokemon);
app.post('/api/caught-pokemon', pokeCtrl.catchPokemon);

//edit endpoint
app.put('/api/caught-pokemon/:id', pokeCtrl.editName);

//delete endpoint
app.delete('/api/caught-pokemon/:id', pokeCtrl.releasePokemon);





app.listen(4444, () => console.log(`Server is running on 4444`));