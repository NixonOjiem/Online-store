import React from 'react';
import Navigation from '../components/Navigation';
import FurniturePics from '../components/FurniturePics';
import BedPics from '../components/BedPics';

function FunitureScreen() {
  return (
    <div>
      <Navigation />
      <div className='Furniture-comp1'>
      <h3 className='Page-Heading'>Furniture Page</h3>
      <FurniturePics />
      <BedPics />
      </div>
    </div>
  )
}

export default FunitureScreen