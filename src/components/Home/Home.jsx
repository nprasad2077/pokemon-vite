import React from 'react'

// Components
import NavHeader from '../NavHeader/NavHeader'
import Search from '../Search/Search'
import PokeDisplay from '../PokeDisplay/PokeDisplay'

const Home = ({pokemon, setPokemon, getPokemon}) => {

  const sprites = pokemon.sprites
  const name = pokemon.name && pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)


  console.log(name);



  return (
    <div>
      <h1 class='text-3xl font-bold text-center text-[#62C594]'>Pokemon React!</h1>

      <div>
        <div class='flex flex-col content-center items-center'>
          <Search pokemon={pokemon} setPokemon={setPokemon}/>
          <p class='text-3xl font-bold text-center'>{name}</p>
        </div>
        <div class='flex flex-row'>
          <PokeDisplay sprites={sprites}/>
        </div>
      </div>
    </div>
  )
}

export default Home