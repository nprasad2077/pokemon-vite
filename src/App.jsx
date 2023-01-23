import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

// Components
import Home from './components/Home/Home'

const App = () => {
  const [pokemon, setPokemon] = useState([])
  const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/ditto'

  const getPokemon = async () => {
    const response = await axios.get(pokeUrl)
    .then(res => setPokemon(res.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {getPokemon()}, [])


  return (
    <div>
      <Home getPokemon={getPokemon} pokemon={pokemon} setPokemon={setPokemon} />
    </div>
  )
}

export default App