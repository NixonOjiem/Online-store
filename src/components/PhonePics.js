import React from 'react';
import phone1 from '../images/PHONE1.jpg';
import phone2 from '../images/phone2.jpg';
import phone3 from '../images/phone3.jpg';
import phone4 from '../images/phone 4.jpg';
import phone5 from '../images/phone5.jpg';
import phone6 from '../images/phone6.jpg';
import phone7 from '../images/phone7.jpg';
import phone8 from '../images/phone8.jpg';
import phone9 from '../images/phone9.png';

function PhonePics() {
    

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
        <h4 className='Category-Name'>Top selling smart phones</h4>
        <div className="row">
            <div className='pic-container'>
                <img src={phone1} alt="phone1" className='product-pics' onClick={() => handleClick(phone1, 'phone1')}/>
                <p>Custom X19</p>
            </div>
            <div className='pic-container'>
                <img src={phone2} alt="phone2" className='product-pics' onClick={() => handleClick(phone2, 'phone2')}/>
                <p>Custom Z27</p>
            </div>
            <div className='pic-container'>
                <img src={phone3} alt="phone3" className='product-pics' onClick={() => handleClick(phone3, 'phone3')}/>
                <p>Custom G67</p>
            </div>
            <div className='pic-container'>
                <img src={phone4} alt="phone4" className='product-pics' onClick={() => handleClick(phone4, 'phone4')}/>
                <p>Custom N78</p>
            </div>
            <div className='pic-container'>
                <img src={phone5} alt="phone5" className='product-pics' onClick={() => handleClick(phone5, 'phone5')}/>
                <p>Custom K98</p>
            </div>
            <div className='pic-container'>
                <img src={phone6} alt="phone6" className='product-pics' onClick={() => handleClick(phone6, 'phone6')}/>
                <p>Custom L89</p>
            </div>
            <div className='pic-container'>
                <img src={phone7} alt="phone7" className='product-pics' onClick={() => handleClick(phone7, 'phone7')}/>
                <p>Custom R90</p>
            </div>
            <div className='pic-container'>
                <img src={phone8} alt="phone8" className='product-pics' onClick={() => handleClick(phone8, 'phone8')}/>
                <p>Custom X87</p>
            </div>
            <div className='pic-container'>
                <img src={phone9} alt="phone9" className='product-pics' onClick={() => handleClick(phone9, 'phone9')}/>
                <p>Custom H90</p>
            </div>
        </div>
    </div>
  )
}

export default PhonePics