import React from 'react'

// Components
import NavHeader from '../NavHeader/NavHeader'
import Search from '../Search/Search'
import PokeDisplay from '../PokeDisplay/PokeDisplay'

const Home = ({pokemon, setPokemon, getPokemon}) => {

  const sprites = pokemon.sprites



  return (
    <div>
      <h1 class='text-3xl font-bold text-center'>Pokemon React!</h1>

      <div>
        <div class='flex flex-col content-center items-center'>
          <Search pokemon={pokemon} setPokemon={setPokemon}/>
        </div>
        <div class='flex flex-row'>
          <PokeDisplay sprites={sprites}/>
        </div>
      </div>
    </div>
  )
}

export default Home