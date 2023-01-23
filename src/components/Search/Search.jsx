import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

// Components
import PokeDisplay from '../PokeDisplay/PokeDisplay'

const Search = ({pokemon, setPokemon}) => {
  const [search, setSearch] = useState('')
  const sprites = pokemon.sprites

  const handleInput = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const getPokemon = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
    .then(res => setPokemon(res.data))
    .catch(err => console.log(err))
  }

  console.log(pokemon);
  console.log(search);
  console.log(sprites);



  return (
    <div class='flex flex-col mt-5'>
      <p class='text-center'>Search Pokémon:</p>
      <input type='text' placeholder='Search Pokemon' class='mx-20' onChange={handleInput} />
      <button onClick={getPokemon}>Submit</button>


      <div>
        <PokeDisplay pokemon={pokemon} sprites={sprites} />
      </div>
    </div>
  )
}

export default Search