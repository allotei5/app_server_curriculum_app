import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ashesi_logo from "../../Images/ashesi_logo.png"
import '../Nav.css';
import { ProfileModalButton } from "../Profile/ProfileModalButton";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const AdminNav = ({ currentUser }) => {


return (
    <Navbar expand="lg">
        <Container>
                
                <Navbar.Brand to="/">
                    <NavLink to="/" className="link">
                        <div className="img_div" to="/" >
                            <div>
                                <img className="logo" src={ashesi_logo} alt="logo"/>
                                <span style={{color: "#000", paddingRight: "10px", fontWeight: "500", textDecoration: "none", fontSize: "14px"}}>Curriculum App</span>

                            </div>
                            {/* <div style={{fontSize: "18px"}}><span style={{color: "#923d41", paddingRight: "10px", fontWeight: "600", textDecoration: "none"}}>Curriculum</span> App</div> */}
                        </div>
                    </NavLink> 
                </Navbar.Brand>
            
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className='me-5'>
                    <Nav className="me-auto">
                        <><NavLink className="link" activeclassname="active" to="/">Home</NavLink></>
                        <><NavLink className="link" activeclassname="active" to="/view-curriculum">View Curriculum</NavLink></>
                        {
                            (currentUser.permissions !== undefined && currentUser.permissions.user_permission_id == 1) ? 
                            <>
                                <><NavLink className="link" activeclassname="active" to="/course-tracker">Course Tracker</NavLink></>

                                <NavDropdown style={{fontSize: "14px", marginTop: "2px"}} title="Admin Pages" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/curriculum/course-tracker">
                                        <Link className="link" to="/course-tracker">Course Tracker</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/curriculum/edit-curriculum">
                                        <Link className="link" to="/edit-curriculum">Edit Curriculum</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/curriculum/edit-prerequisite">
                                        <Link className="link" to="/edit-prerequisite">Edit Prerequisites</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/curriculum/students">
                                        <Link className="link" to="/students">Students</Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </>
                        : ""
                        }
                        <><NavLink className="link" activeclassname="active" to="/tutorials">Tutorial</NavLink></>

                    </Nav>
                </Navbar.Text>
                <Navbar.Text>
                    <Nav className="me-auto" style={{marginTop: "-7px"}}>
                        <a  className='link' href="https://apps.ashesi.edu.gh/app_server/login/logout.php">Logout</a>
                        <a href="https://apps.ashesi.edu.gh/" style={{color: "#000", paddingRight: "10px", paddingLeft: "10px", paddingTop: "10px", fontWeight: "400", textDecoration: "none", fontSize: "14px"}}>Apps</a>
                    </Nav>
                </Navbar.Text>
            </Navbar.Collapse>
                
        </Container>
    </Navbar>
)
}

export default AdminNav