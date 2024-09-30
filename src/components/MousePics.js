import React from 'react';
import mouse1 from '../images/mouse1.jpg';
import mouse2 from '../images/mouse2.jpg';
import mouse3 from '../images/mouse3.jpg';
import mouse4 from '../images/mouse4.jpg';
import mouse5 from '../images/mouse5.jpg';
import mouse6 from '../images/mouse6.jpg';
import mouse7 from '../images/mouse7.jpg';
import mouse8 from '../images/mouse8.jpg';
import mouse9 from '../images/mouse9.jpg';



function MousePics() {
  return (
    <div className='mouse-container'>
        <h4 className='Category-Name'>Top Selling mouse</h4>
        <div className='mouse-pic-row'>
            <img src= {mouse1} className='mouse-pics'/>
            <img src= {mouse2} className='mouse-pics'/>
            <img src= {mouse3} className='mouse-pics'/>
            <img src= {mouse4} className='mouse-pics'/>
            <img src= {mouse5} className='mouse-pics'/>
            <img src= {mouse6} className='mouse-pics'/>
            <img src= {mouse7} className='mouse-pics'/>
            <img src= {mouse8} className='mouse-pics'/>
            <img src= {mouse9} className='mouse-pics'/>
        </div>
    </div>
  )
}

export default MousePics