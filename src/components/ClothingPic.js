import React from 'react';
import clothing1 from '../images/clothing1.jpg';
import clothing2 from '../images/clothing2.jpg';
import clothing3 from '../images/clothing3.jpg';
import clothing4 from '../images/clothing4.jpg';
import clothing5 from '../images/clothing5.jpg';
import clothing6 from '../images/clothing6.jpg';
import clothing7 from '../images/clothing7.jpg';
import clothing8 from '../images/clothing8.jpg';

function ClothingPic() {

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
        <h4 className='Category-Name'>Top selling smart shirts</h4>
        <div className="row">
            <div className='pic-container'>
                <img src={clothing1} alt="phone1" className='product-pics' onClick={() => handleClick(clothing1, 'Custom X19')}/>
                <p>Custom X19</p>
            </div>
            <div className='pic-container'>
            <img src={clothing2} alt="phone1" className='product-pics' onClick={() => handleClick(clothing2, 'Custom Z27')}/>
                <p>Custom Z27</p>
            </div>
            <div className='pic-container'>
                <img src={clothing3} alt="phone3" className='product-pics' onClick={() => handleClick(clothing3, 'Custom G67')}/>
                <p>Custom G67</p>
            </div>
            <div className='pic-container'>
                <img src={clothing4} alt="phone4" className='product-pics' onClick={() => handleClick(clothing4, 'Custom N78')}/>
                <p>Custom N78</p>
            </div>
            <div className='pic-container'>
                <img src={clothing5} alt="phone5" className='product-pics' onClick={() => handleClick(clothing5, 'Custom K98')}/>
                <p>Custom K98</p>
            </div>
            <div className='pic-container'>
                <img src={clothing6} alt="phone6" className='product-pics' onClick={() => handleClick(clothing6, 'Custom L89')}/>
                <p>Custom L89</p>
            </div>
            <div className='pic-container'>
                <img src={clothing7} alt="phone7" className='product-pics' onClick={() => handleClick(clothing7, 'Custom R90')}/>
                <p>Custom R90</p>
            </div>
            <div className='pic-container'>
                <img src={clothing8} alt="phone8" className='product-pics' onClick={() => handleClick(clothing8, 'Custom X87')}/>
                <p>Custom X87</p>
            </div>
            {/* <div className='pic-container'>
                <img src={phone9} alt="phone9" className='product-pics' onClick={() => handleClick(phone9, 'phone9')}/>
                <p>Custom H90</p>
            </div> */}
        </div>
    </div>
  )
}

export default ClothingPic