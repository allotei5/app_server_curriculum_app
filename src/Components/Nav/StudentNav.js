import { Link, NavLink } from "react-router-dom";
import ashesi_logo from "../../Images/ashesi_logo.png"
import '../Nav.css';
import { ProfileModalButton } from "../Profile/ProfileModalButton";
import { FaBars } from 'react-icons/fa'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const StudentNav = ({ currentUser }) => {


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
                            <><NavLink className="link" activeclassname="active" to="/course-tracker">Course Tracker</NavLink></>
                            <><NavLink className="link" activeclassname="active" to="/tutorials">Tutorial</NavLink></>
                        </Nav>
                    </Navbar.Text>
                    <Navbar.Text>
                        <Nav className="me-auto" style={{marginTop: "-5px"}}>
                            <div className="link"><ProfileModalButton /></div>
                            <a  className='link' href="https://apps.ashesi.edu.gh/app_server/login/logout.php">Logout</a>
                            <a href="https://apps.ashesi.edu.gh/" style={{color: "#000", paddingRight: "10px", paddingLeft: "10px", paddingTop: "10px", fontWeight: "400", textDecoration: "none", fontSize: "14px"}}>Apps</a>
                        </Nav>
                    </Navbar.Text>
                </Navbar.Collapse>
                    
            </Container>
        </Navbar>
    )
}

export default StudentNav