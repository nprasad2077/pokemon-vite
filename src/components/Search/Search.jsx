import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Search = () => {
  const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/ditto'
  const [pokemon, setPokemon] = useState([])

  const getPokemon = async () => {
    const response = await axios.get(pokeUrl)
    console.log(response.data)
  }

  useEffect(() => {getPokemon()}, [])


  return (
    <div>Search</div>
  )
}

export default Search