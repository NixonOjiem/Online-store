import React from 'react';
import bed1 from '../images/bed1.jpg';
import bed2 from '../images/bed2.jpg';
import bed3 from '../images/bed3.jpg';
import bed4 from '../images/bed4.jpg';
import bed5 from '../images/bed5.jpg';
import bed6 from '../images/bed6.jpg';
import bed7 from '../images/bed7.jpg';
import bed8 from '../images/bed8.jpg';

function BedPics() {

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
        <h4 className='Category-Name'>Top Selling mouse</h4>
        <div className='row'>
          <div className='pic-container'>
            <img src= {bed1} className='product-pics' onClick={() => handleClick(bed1, 'Custom U16')}/>
            <p>Custom U16</p>
          </div>
          <div className='pic-container'>
          <img src= {bed2} className='product-pics' onClick={() => handleClick(bed2, 'Custom U16')}/>
            <p>Custom H15</p>
          </div>
          <div className='pic-container'>
          <img src= {bed3} className='product-pics' onClick={() => handleClick(bed3, 'Custom U16')}/>
            <p>Custom P14</p>
          </div>
          <div className='pic-container'>
            <img src= {bed4} className='product-pics' onClick={() => handleClick(bed4, 'Custom M15')}/>
            <p>Custom M15</p>
          </div>
          <div className='pic-container'>
            <img src= {bed5} className='product-pics' onClick={() => handleClick(bed5, 'Custom N15')}/>
            <p>Custom N15</p>
          </div>
          <div className='pic-container'>
            <img src= {bed6} className='product-pics' onClick={() => handleClick(bed6, 'Custom R15')}/>
            <p>Custom R15</p>
          </div>
          <div className='pic-container'>
            <img src= {bed7} className='product-pics' onClick={() => handleClick(bed7, 'Custom X15')}/>
            <p>Custom X15</p>
          </div>
          <div className='pic-container'>
            <img src= {bed8} className='product-pics' onClick={() => handleClick(bed8, 'Custom Y15')}/>
            <p>Custom Y15</p>
          </div>
        </div>
    </div>
  )
}

export default BedPics
