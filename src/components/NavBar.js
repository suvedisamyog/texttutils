import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {

 

  return (
    <>
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/features">Features</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        
      </ul>
    </div>
  </div>
  <i className="fa-solid fa-sun m-3"></i>
  <div className="form-check form-switch" >
  <input className="form-check-input" type="checkbox" onClick={props.toogleMode} id="mode"/>
</div>
  <i  className="fa-solid fa-moon m-2"></i>
</nav>
    </>
  )
}

export default NavBar;