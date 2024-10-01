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

  function handleClick(image, name){
    // Create a popup element
    const popup = document.createElement('div');
    popup.className = 'popup';

    // Create a content element for the popup
    const content = document.createElement('div');
    content.className = 'popup-content';

    // Add the image and name to the content element
    content.innerHTML = `
    <img src=${image} />
    <h2>${name}</h2>
    <p>More details about ${name}...</p>
    `;

    // Add the content element to the popup element
    popup.appendChild(content);

    // Add the popup element to the body
    document.body.appendChild(popup);
  }
  
  document.addEventListener('click', (e) => {
    if (e.target.className === 'popup') {
      e.target.remove();
    }
  });

  return (
    <div className='mouse-container'>
        <h4 className='Category-Name'>Top Selling mouse</h4>
        <div className='mouse-pic-row'>
          <div className='mouse-pic'>
            <img src= {mouse1} className='mouse-pics' onClick={() => handleClick(mouse1, 'Custom U16')}/>
            <p>Custom U16</p>
          </div>
          <div className='mouse-pic'>
            <img src= {mouse2} className='mouse-pics' onClick={() => handleClick(mouse2, 'Custom H15')}/>
            <p>Custom H15</p>
          </div>
          <div className='mouse-pic'>
            <img src= {mouse3} className='mouse-pics' onClick={() => handleClick(mouse3, 'Custom P14')}/>
            <p>Custom P14</p>
          </div>
          <div className='mouse-pic'>
            <img src= {mouse4} className='mouse-pics' onClick={() => handleClick(mouse4, 'Custom M15')}/>
            <p>Custom M15</p>
          </div>
          <div className='mouse-pic'>
            <img src= {mouse5} className='mouse-pics' onClick={() => handleClick(mouse5, 'Custom N15')}/>
            <p>Custom N15</p>
          </div>
          <div className='mouse-pic'>
            <img src= {mouse6} className='mouse-pics' onClick={() => handleClick(mouse6, 'Custom R15')}/>
            <p>Custom R15</p>
          </div>
          <div className='mouse-pic'>
            <img src= {mouse7} className='mouse-pics' onClick={() => handleClick(mouse7, 'Custom X15')}/>
            <p>Custom X15</p>
          </div>
          <div className='mouse-pic'>
            <img src= {mouse8} className='mouse-pics' onClick={() => handleClick(mouse8, 'Custom Y15')}/>
            <p>Custom Y15</p>
          </div>
          <div className='mouse-pic'>
            <img src= {mouse9} className='mouse-pics' onClick={() => handleClick(mouse9, 'Custom Z15')}/>
            <p>Custom Z15</p>
          </div>
        </div>
    </div>
  )
}

export default MousePics