import React from 'react';
import furniture1 from '../images/furniture1.jpg';
import furniture2 from '../images/furniture2.jpg';
import furniture3 from '../images/furniture3.jpg';
import furniture4 from '../images/furniture4.jpg';
import furniture5 from '../images/furniture5.jpg';
import furniture6 from '../images/furniture6.jpg';
import furniture7 from '../images/furniture7.jpg';
import furniture8 from '../images/furniture8.jpg';

function FurniturePics() {

    function handleClick(image, name){

        // Create a popup element
        const popup = document.createElement('div');
        popup.className = 'popup';
    
        // Create a content element for the popup
        const content = document.createElement('div');
        content.className = 'popup-content';
    
        // Add the image and name to the content element
        content.innerHTML = `
        <img src=${image} class="popup-image"/>
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
    <div className='Category-container'>
        <h4 className='Category-Name'>Top Selling sofas</h4>
        <div className='row'>
          <div className='pic-container'>
            <img src= {furniture1} className='product-pics' onClick={() => handleClick(furniture1, 'Custom U16')}/>
            <p>Custom U16</p>
          </div>
          <div className='pic-container'>
            <img src= {furniture2} className='product-pics' onClick={() => handleClick(furniture2, 'Custom H15')}/>
            <p>Custom H15</p>
          </div>
          <div className='pic-container'>
            <img src= {furniture3} className='product-pics' onClick={() => handleClick(furniture3, 'Custom P14')}/>
            <p>Custom P14</p>
          </div>
          <div className='pic-container'>
            <img src= {furniture4} className='product-pics' onClick={() => handleClick(furniture4, 'Custom M15')}/>
            <p>Custom M15</p>
          </div>
          <div className='pic-container'>
            <img src= {furniture5} className='product-pics' onClick={() => handleClick(furniture5, 'Custom N15')}/>
            <p>Custom N15</p>
          </div>
          <div className='pic-container'>
            <img src= {furniture6} className='product-pics' onClick={() => handleClick(furniture6, 'Custom R15')}/>
            <p>Custom R15</p>
          </div>
          <div className='pic-container'>
            <img src= {furniture7} className='product-pics' onClick={() => handleClick(furniture7, 'Custom X15')}/>
            <p>Custom X15</p>
          </div>
          <div className='pic-container'>
            <img src= {furniture8} className='product-pics' onClick={() => handleClick(furniture8, 'Custom Y15')}/>
            <p>Custom Y15</p>
          </div>
        </div>
    </div>
  )
}

export default FurniturePics