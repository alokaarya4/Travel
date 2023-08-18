import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useUserContext from "../UserContext";

const Navbar = () => {
  const { loggedIn, logout } = useUserContext();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const showLoginOption = () => {
    if (loggedIn) {
      return (
        <>
        <li className="nav-item">
          <button onClick={logout} className="btn btn-danger">Logout</button>
        </li>
        <li>
          <img width={40} className="ms-4 rounded-circle" src={"http://localhost:5000/"+currentUser.avatar} alt="" />
        </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              Signup
            </NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <img src="" alt="Navbar Logo" />
      <div className="container-fluid">
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/location">
                Add Location
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/viewlocation">
                View Location
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/addplace">
                Add Place
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/viewplace">
              View Place
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact Us
              </NavLink>
            </li>

          





            
            {showLoginOption()}


          </ul>
        </div>
      </div>
    </nav>
    </nav>
  );
};

export default Navbar;