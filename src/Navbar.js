import React from 'react';

function Navbar() {
  return (
    <nav
      className='navbar is-primary'
      role='navigation'
      aria-label='main navigation'
    >
      <div id='navbarBasic' className='navbar-menu'>
        <div className='navbar-start'>
          <a className='navbar-item' href='/#'>
            <b>Analytic Dashboard for Kyupid</b>
          </a>
        </div>
        <div className='navbar-end'>
          <a className='navbar-item' href='/#'>
            Home
          </a>

          <a className='navbar-item' href='/#docs'>
            Documentation
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
