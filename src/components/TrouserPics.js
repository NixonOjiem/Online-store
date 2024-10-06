import React from 'react';
import trouser1 from '../images/trouser1.jpg';
import trouser2 from '../images/trouser2.jpg';
import trouser3 from '../images/trouser3.jpg';
import trouser4 from '../images/trouser4.jpg';
import trouser5 from '../images/trouser5.jpg';
import trouser6 from '../images/trouser6.jpg';
import trouser7 from '../images/trouser7.jpg';
import trouser8 from '../images/trouser8.jpg';

function TrouserPics() {

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
        <h4 className='Category-Name'>Top selling Trousers</h4>
        <div className="row">
            <div className='pic-container'>
                <img src={trouser1} alt="trouser1" className='product-pics' onClick={() => handleClick(trouser1, 'trouser1')}/>
                <p>Custom X19</p>
            </div>
            <div className='pic-container'>
                <img src={trouser2} alt="trouser2" className='product-pics' onClick={() => handleClick(trouser2, 'trouser2')}/>
                <p>Custom Z27</p>
            </div>
            <div className='pic-container'>
                <img src={trouser3} alt="trouser3" className='product-pics' onClick={() => handleClick(trouser3, 'trouser3')}/>
                <p>Custom G67</p>
            </div>
            <div className='pic-container'>
                <img src={trouser4} alt="trouser4" className='product-pics' onClick={() => handleClick(trouser4, 'trouser4')}/>
                <p>Custom N78</p>
            </div>
            <div className='pic-container'>
                <img src={trouser5} alt="trouser5" className='product-pics' onClick={() => handleClick(trouser5, 'trouser5')}/>
                <p>Custom K98</p>
            </div>
            <div className='pic-container'>
                <img src={trouser6} alt="trouser6" className='product-pics' onClick={() => handleClick(trouser6, 'trouser6')}/>
                <p>Custom L89</p>
            </div>
            <div className='pic-container'>
                <img src={trouser7} alt="trouser7" className='product-pics' onClick={() => handleClick(trouser7, 'trouser7')}/>
                <p>Custom R90</p>
            </div>
            <div className='pic-container'>
                <img src={trouser8} alt="trouser8" className='product-pics' onClick={() => handleClick(trouser8, 'trouser8')}/>
                <p>Custom X87</p>
            </div>
        </div>
    </div>
  )
}

export default TrouserPics