import React from 'react'

// Components
import NavHeader from '../NavHeader/NavHeader'
import Search from '../Search/Search'

const Home = ({pokemon, setPokemon, getPokemon}) => {
  return (
    <div>
      <h1 class='text-3xl font-bold text-center'>Pokemon React!</h1>

      <div>
        <Search pokemon={pokemon} setPokemon={setPokemon}/>
      </div>
    </div>
  )
}

export default Home