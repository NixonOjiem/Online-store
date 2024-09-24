import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';

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
      </div>
      
      <div id="mySidenav" ref={sidenavRef} class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
      
    </>
  );
}

export default Navigation;