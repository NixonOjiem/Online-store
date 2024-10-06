import React from 'react'
import Navigation from '../components/Navigation'
import ClothingPic from '../components/ClothingPic'
import TrouserPics from '../components/TrouserPics'

function ClothingScreen() {
  return (
    <div>
        <Navigation />
        <div className='Clothing-comp1'>
            <ClothingPic /> <br />
            <TrouserPics />
        </div>
    </div>
  )
}

export default ClothingScreen