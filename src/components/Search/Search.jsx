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
    <div class='flex flex-col mt-10'>

      <div class='self-center flex flex-row'>
        <input type='text' placeholder='Search Pokemon' class='mx-4 input input-bordered input-warning w-full max-w-xs mb-4' onChange={handleInput} />
        <button onClick={getPokemon} className="btn btn-primary w-auto">Submit</button>
      </div>




      <div>
        <PokeDisplay pokemon={pokemon} sprites={sprites} />
      </div>
    </div>
  )
}

export default Search