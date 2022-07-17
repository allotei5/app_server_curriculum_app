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
//   return (
//     <>
//         <header>
//             <div className="img_div" to="/" >
//                 <div>
//                     <img className="logo" src={ashesi_logo} alt="logo"/>
//                 </div>
//             <><span style={{color: "#923d41", paddingRight: "10px", fontWeight: "600", textDecoration: "none"}}>Curriculum</span> App</>
//             </div>
//             <nav>
//                 <ul className="nav__links">
//                     <li> <NavLink className="link" activeclassname="active" to="/">Home</NavLink></li>
//                     <li> <NavLink className="link" activeclassname="active" to="/view-curriculum">View Curriculum</NavLink></li>
//                     {
//                     (currentUser.permissions.user_permission_id == 2) ? 
//                     <>
//                         <li> <NavLink className="link" activeclassname="active" to="/course-tracker">Course Tracker</NavLink></li>
//                         <li> <Link className="link" to="/edit-curriculum">Edit Curriculum</Link></li>
//                         <li> <Link className="link" to="/edit-prerequisite">Edit Prerequisites</Link></li>
//                         <li> <Link className="link" to="/students">Students</Link></li>
//                     </>
//                     : ""
//                     }
//                 </ul>
//             </nav>
//             <nav>
//             <ul className="nav__links app__links">
//                 {
//                     (currentUser.permissions.user_permission_id == 2) ? <ProfileModalButton /> : ""
//                 }
//                 <li><a className="link" style={{color: "#000"}} href="#">Apps Dashboard</a></li>
//             </ul>
//             </nav>
//       </header>
//     </>
//   )

return (
    <Navbar expand="lg">
        <Container>
                
            <Navbar.Brand href="#home">
                <div className="img_div" to="/" >
                    <div>
                        <img className="logo" src={ashesi_logo} alt="logo"/>
                    </div>
                    <div style={{fontSize: "18px"}}><span style={{color: "#923d41", paddingRight: "10px", fontWeight: "600", textDecoration: "none"}}>Curriculum</span> App</div>
                </div>
            </Navbar.Brand>
            
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className='me-5'>
                    <Nav className="me-auto">
                        <Nav.Link><NavLink className="link" activeclassname="active" to="/">Home</NavLink></Nav.Link>
                        <Nav.Link><NavLink className="link" activeclassname="active" to="/view-curriculum">View Curriculum</NavLink></Nav.Link>
                        <Nav.Link><NavLink className="link" activeclassname="active" to="/course-tracker">Course Tracker</NavLink></Nav.Link>
                        <NavDropdown style={{fontSize: "14px", marginTop: "2px"}} title="Admin Pages" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link className="link" to="/course-tracker">Course Tracker</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className="link" to="/edit-curriculum">Edit Curriculum</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className="link" to="/edit-prerequisite">Edit Prerequisites</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className="link" to="/students">Students</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Text>
                <Navbar.Text>
                    <Nav className="me-auto">
                        <Nav.Link style={{paddingTop: "10px"}}><ProfileModalButton /></Nav.Link>
                        <Nav.Link href="#link">Apps</Nav.Link>
                    </Nav>
                </Navbar.Text>
            </Navbar.Collapse>
                
        </Container>
    </Navbar>
)
}

export default AdminNav