import React from 'react'

// Components
import NavHeader from '../NavHeader/NavHeader'
import Search from '../Search/Search'

const Home = () => {
  return (
    <div>
      <h1 class='text-3xl font-bold text-center'>Pokemon React!</h1>

      <div>
        <Search />
      </div>
    </div>
  )
}

export default Home