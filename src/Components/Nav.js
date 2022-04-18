// import React from "react";
import { Link, Outlet } from "react-router-dom";
import ashesi_logo from "../Images/ashesi_logo.png"
import './Nav.css';

export default function Nav() {
  return (
    <>
      <header>
        <div className="img_div" >
          <img className="logo" src={ashesi_logo} alt="logo"/>
        </div>
        <nav>
          <ul className="nav__links">
            <li> <Link className="link active" to="/">Home</Link></li>
            <li> <Link className="link" to="/course-tracker">Course Tracker</Link></li>
            <li> <Link className="link" to="/view-curriculum">View Curriculum</Link></li>
          </ul>
        </nav>
        <nav>
          <ul className="nav__links app__links">
            <li><Link className="link" to="/profile">Profile</Link></li>
            <li><a className="link" href="#">Apps Dashboard</a></li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}