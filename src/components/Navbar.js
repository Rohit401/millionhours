import React from "react";
import '../css/Navbar.css'
import {NavLink} from 'react-router-dom';
import { IoMdSearch } from "react-icons/io"
 import {BsFillPersonFill  } from "react-icons/bs"

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <h5 class="navbar-brand" href="#">Million Hours</h5>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="About">About</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link active" href="#">Milestone</a>
         </li>
  
          <li class="nav-item">
            <a class="nav-link active " href="#"><IoMdSearch/></a>
          </li>
          <li class="nav-item">
            <a class="nav-link active " href="#"><BsFillPersonFill/></a>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  
    
  );
};

export default Navbar;
