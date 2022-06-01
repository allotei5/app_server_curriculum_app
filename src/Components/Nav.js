import { useContext, useEffect, useState } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import ashesi_logo from "../Images/ashesi_logo.png"
import './Nav.css';

import { UserContext } from "../Context/UserContext";
import { ProfileModalButton } from "./Profile/ProfileModalButton";

const Nav = () => {

  const { currentUser } = useContext(UserContext);

  return (
    <>
      <header>
        <div className="img_div" to="/" >
          <div>
            <img className="logo" src={ashesi_logo} alt="logo"/>
          </div>
          <><span style={{color: "#923d41", paddingRight: "10px", fontWeight: "600", textDecoration: "none"}}>Curriculum</span> App</>
        </div>
        <nav>
          <ul className="nav__links">
            <li> <NavLink className="link" activeclassname="active" to="/">Home</NavLink></li>
            <li> <NavLink className="link" activeclassname="active" to="/course-tracker">Course Tracker</NavLink></li>
            <li> <NavLink className="link" activeclassname="active" to="/view-curriculum">View Curriculum</NavLink></li>
            {
              (currentUser.user_role == 1) ? 
              <>
                <li> <Link className="link" to="/edit-curriculum">Edit Curriculum</Link></li>
                <li> <Link className="link" to="/edit-prerequisite">Edit Prerequisites</Link></li>
              </>
              : ""
            }
          </ul>
        </nav>
        <nav>
          <ul className="nav__links app__links">
            {/* <li><Link className="link" to="/profile">Profile</Link></li> */}
            <ProfileModalButton />
            <li><a className="link" style={{color: "#000"}} href="#">Apps Dashboard</a></li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Nav;