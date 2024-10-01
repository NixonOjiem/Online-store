import React from 'react';
import Navigation from '../components/Navigation';
import MousePics from '../components/MousePics';
import PhonePics from '../components/PhonePics';
function ElectronicsScreen() {

  return (
    <div className='Electronics-Container'>
        <Navigation />
        <div className='Electronics-comp1'>
           <h3 className='Page-Heading'>Elelctronics page</h3>
            <MousePics /><br />
            <PhonePics />
            
        </div>
    </div>
  )
}

export default ElectronicsScreen