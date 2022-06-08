import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="nav-title">
        <h1>
          <span>Tayo's</span> Blog
        </h1>
      </div>
      <nav>
        <Link to="/" className="nav-links">
          Home
        </Link>
        <Link to="/new-post" className="nav-links">
          New Post
        </Link>
      </nav>
    </div>
  );
};

export default Header;
