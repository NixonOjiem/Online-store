import React from 'react';
import Navigation from '../components/Navigation';
import MousePics from '../components/MousePics';
import PhonePics from '../components/PhonePics';

function HomeScreen() {
  return (
    <div>
        <Navigation />
        <div className='Home-comp1'>
        <h3 className='Page-Heading'>Home Page</h3>
            <MousePics /> <br />
            <PhonePics />
        </div>
    </div>
  )
}

export default HomeScreen