// Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>UN POCO DE TODO</h1>
      <nav>
        <ul>
          <p><Link to="/" className='no'>Home</Link></p>
          <p><Link to="/crear-post" className='no'>Crear Post</Link></p>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
