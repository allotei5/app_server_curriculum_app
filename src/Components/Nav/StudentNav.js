import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ashesi_logo from "../../Images/ashesi_logo.png"
import '../Nav.css';
import { ProfileModalButton } from "../Profile/ProfileModalButton";

const StudentNav = ({ currentUser }) => {
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
                    <li> <NavLink className="link" activeclassname="active" to="/view-curriculum">View Curriculum</NavLink></li>
                    <li> <NavLink className="link" activeclassname="active" to="/course-tracker">Course Tracker</NavLink></li>
                </ul>
            </nav>
            <nav>
            <ul className="nav__links app__links">
                <ProfileModalButton />
                <li><a className="link" style={{color: "#000"}} href="#">Apps Dashboard</a></li>
            </ul>
            </nav>
      </header>
    </>
  )
}

export default StudentNav