import React from 'react';
import Navigation from '../components/Navigation';
import MousePics from '../components/MousePics';
function ElectronicsScreen() {

  return (
    <div className='Electronics-Container'>
        <Navigation />
        <div className='Electronics-comp1'>
           <h2>Elelctronics</h2><br />
            <MousePics />
            
        </div>
    </div>
  )
}

export default ElectronicsScreen