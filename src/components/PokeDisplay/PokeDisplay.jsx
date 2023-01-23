import React from 'react'

const PokeDisplay = ({sprites}) => {


  return (
    <div class='flex flex-col'>


        <p>Default Sprites</p>
        <div class='flex flex-row'>
            <img src={sprites ? sprites.front_default : null} alt='front' />
            <img src={sprites ? sprites.back_default : null} alt='back' />
        </div>
        <p>Shiny Sprites</p>
        <div class='flex flwx-row'>
            <img src={sprites ? sprites.front_shiny : null} alt='front shiny' />
            <img src={sprites ? sprites.back_shiny : null} alt='back shiny' />
        </div>
        
    
    </div>
  )
}

export default PokeDisplay