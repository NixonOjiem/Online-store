import React from 'react'
import Navigation from '../components/Navigation'
import ClothingPic from '../components/ClothingPic'

function ClothingScreen() {
  return (
    <div>
        <Navigation />
        <div className='Clothing-comp1'>
            <ClothingPic />
        </div>
    </div>
  )
}

export default ClothingScreen