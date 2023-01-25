import React from 'react'

const PokeDisplay = ({sprites}) => {

    const redVersion = sprites && sprites.versions['generation-i']['red-blue']
    const crystalVersion = sprites && sprites.versions['generation-ii']['crystal']



  return (
    <div class='flex flex-col justify-center content-center text-center items-center mt-10'>

    {/* <h1>Sprites</h1> */}

    <div id='sprites text-center items-center content-center'>
        <p>Default Sprites</p>
        <div class='flex flex-row justify-center'>
            <img src={sprites ? sprites.front_default : null} alt='front' />
            <img src={sprites ? sprites.back_default : null} alt='back' />
        </div>
        <p>Shiny Sprites</p>
        <div class='flex flex-row justify-center'>
            <img src={sprites ? sprites.front_shiny : null} alt='front shiny' />
            <img src={sprites ? sprites.back_shiny : null} alt='back shiny' />
        </div>
        <p>Blue/Red Version Sprites</p>
        <div class='flex flex-row justify-center'>
            <img src={redVersion ? redVersion.front_default : null} alt='front red/blue' />
            <img src={redVersion ? redVersion.back_default : null} alt='back red/blue' />
        </div>
        <p>Crystal Version Sprites</p>
        <div class='flex flex-row justify-center'>
            <img src={crystalVersion ? crystalVersion.front_default : null} alt='front crystal' />
            <img src={crystalVersion ? crystalVersion.back_default : null} alt='back crystal' />
        </div>
    </div>
        
        
    
    </div>
  )
}

export default PokeDisplay