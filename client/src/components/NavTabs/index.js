import React from "react";
import { Link } from "react-router-dom";
import GoogleLogout from 'react-google-login';
import Style from "./style.css";

function NavTabs(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light transparent">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="btn btn-link">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div className="collapse navbar-collapse navbar-custom" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
          <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Google Books
          </Link>
          </li>
          <li className="nav-item">
          <Link to={`/search/${props.userID}`}
          className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}>
          Search
        </Link>
          </li>
          <li className="nav-item">
          <Link
          to={`/saved/${props.userID}`}
          className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
        >
          Saved Books
        </Link>
          </li>
          <li className="nav-item">
        {/* <Link
          to={`/logout/${props.userID}`}
          className={window.location.pathname === "/logout" ? "nav-link active" : "nav-link"}
          
        >
          Log Out
        </Link> */}
      </li>
      {/* This is the user profile information */}
        </ul>
       <ul className="navbar-nav mt-2 mt-lg-0"> 
       <li className="nav-item">
       <div className="profile-image">
        <img id="profileImage" className="profile-image" src={props.src}></img>
        </div>
        <div className="profile-info">
          <p className="title"><small>Welcome, </small>
          <br/>{props.name} !</p>
        </div>
      
        
       
      </li>
       </ul>
        </div>
    
      
       </div> 

      
    </nav>
  </div>
  );
}

export default NavTabs;