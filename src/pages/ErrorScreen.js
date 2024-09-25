import React from 'react';
import {Link} from 'react-router-dom';
import Navigation from '../components/Navigation';

function ErrorScreen() {
  return (
    <div>
        <Navigation />
        <div className='Error'>
           <h1>Page 404!</h1>  <br />
           <p>Sorry, the page you are looking for does not exist. click here to go to <Link to='/home'>Home</Link></p>
        </div>
    </div>
  )
}

export default ErrorScreen