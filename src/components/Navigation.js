import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

function Navigation() {
  const sidenavRef = useRef(null);

  function closeNav() {
    sidenavRef.current.style.width = "0";
  }

  function openNav() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 600) {
      sidenavRef.current.style.width = "80%";
    } else {
      sidenavRef.current.style.width = "25%";
    }
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
        <Link to='/home'>Home</Link>
        <Link to='/electronics'>Electronics</Link>
        <Link to='/furniture'>Furniture</Link>
        {/* <Link to='/cutlery'>Cutlery</Link> */}
        <Link to='/clothing'>Clothing</Link>
        {/* <Link to='/promotion'>Promotion</Link> */}
      </div>
      
    </>
  );
}

export default Navigation;