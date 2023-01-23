import React from 'react'

const PokeDisplay = ({sprites}) => {

    const redVersion = sprites && sprites.versions['generation-i']['red-blue']

    console.log(redVersion);


  return (
    <div class='flex flex-col'>


        <p>Default Sprites</p>
        <div class='flex flex-row'>
            <img src={sprites ? sprites.front_default : null} alt='front' />
            <img src={sprites ? sprites.back_default : null} alt='back' />
        </div>
        <p>Shiny Sprites</p>
        <div class='flex flex-row'>
            <img src={sprites ? sprites.front_shiny : null} alt='front shiny' />
            <img src={sprites ? sprites.back_shiny : null} alt='back shiny' />
        </div>
        <p>Blue/Red Version Sprites</p>
        <div class='flex flex-row'>
            <img src={redVersion ? redVersion.front_default : null} alt='front red/blue' />
            <img src={redVersion ? redVersion.back_default : null} alt='back red/blue' />
        </div>
        
    
    </div>
  )
}

export default PokeDisplay