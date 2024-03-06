import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <a className="navbar-brand" href="#"><img src="" alt="" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Product</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Download</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Solutions</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Resources</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-white" href="#" id="pricingDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Pricing
            </a>
            <div className="dropdown-menu" aria-labelledby="pricingDropdown">
              <a className="dropdown-item" href="#">Plan 1</a>
              <a className="dropdown-item" href="#">Plan 2</a>
              <a className="dropdown-item" href="#">Plan 3</a>
            </div>
          </li>
        </ul>
      </div>


      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Request a Demo</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Log in</a>
        </li>
        <li className="nav-item bg-dark" style={{borderRadius: "12px"}}>
          <a className="nav-link text-white" href="#">Get Notion Free</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
