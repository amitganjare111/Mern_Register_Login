import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-info">
  <div className="container-fluid">
    <Link to="main" className="navbar-brand" href="#"><b>ProductManagement</b></Link>
      <div className="navbar-nav collapse navbar-collapse">
        <Link to="/" className="nav-link" href="#">Home</Link>
        <Link to="AddProduct" className="nav-link" href="#">AddProduct</Link>
        <Link to="EditName/:id" className="nav-link" href="#">EditProduct</Link>
      </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;