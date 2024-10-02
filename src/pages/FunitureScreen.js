import React from 'react';
import Navigation from '../components/Navigation';
import FurniturePics from '../components/FurniturePics';

function FunitureScreen() {
  return (
    <div>
      <Navigation />
      <div className='Furniture-comp1'>
      <h3 className='Page-Heading'>Furniture Page</h3>
        <FurniturePics />
      </div>
    </div>
  )
}

export default FunitureScreen