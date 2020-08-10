import React from 'react';

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='menu'><a href="#">Profile</a></div>
            <div className='menu'><a href="#">Messages</a></div>
            <div className='menu'><a href="#">News</a></div>
            <div className='menu'><a href="#">Music</a></div>
            <div className='menu'><a href="#">Settings</a></div>
        </nav>
    );
}

export default Navbar;