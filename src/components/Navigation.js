import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  const sidenavRef = useRef(null);

  function closeNav() {
    sidenavRef.current.style.width = "0";
  }

  function openNav() {
    sidenavRef.current.style.width = "20%";
  }

  return (
    <>
      <div className='Top-Bar'>
        <span onClick={openNav} className='Hamburger'>
          <FontAwesomeIcon icon={faBars} size="2x" style={{ color: "#fafcff" }} className='Hamburger-icon' />
        </span>

        <h2 className='App-Name'>ShoppingLab</h2>

        <span className='User-icon'>
          <FontAwesomeIcon icon ={faUser} size="2x" className='user'/>
        </span>
        
      </div>
      
      <div id="mySidenav" ref={sidenavRef} class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
        <a href="#">Electronics</a>
        <a href="#">Funiture</a>
        <a href="#">Catlery</a>
        <a href="#">Promotions</a>
      </div>
      
    </>
  );
}

export default Navigation;