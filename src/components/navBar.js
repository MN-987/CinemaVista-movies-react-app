import React, { useEffect, useState } from 'react';
import './navBar.css';

const NavBar = () => {
  const [isNavHidden, setIsNavHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsNavHidden(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`mask ${isNavHidden ? 'is-hidden' : ''}`}>
        <a href="/">Welcome To Mmovies</a>
        <ul className="list">
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button className="search">Search</button>
        <button className="menu">Menu</button>
      </nav>
    </>
  );
};

export default NavBar;
