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
//   return (
//     <>
//         <header>
//             <div className="img_div" to="/" >
//                 <div>
//                     <img className="logo" src={ashesi_logo} alt="logo"/>
//                 </div>
//                 <><span style={{color: "#923d41", paddingRight: "10px", fontWeight: "600", textDecoration: "none"}}>Curriculum</span> App</>
//             </div>
//             <FaBars className="bar-icon" />
//             <nav>
//                 <ul className="nav__links">
//                     <li> <NavLink className="link" activeclassname="active" to="/">Home</NavLink></li>
//                     <li> <NavLink className="link" activeclassname="active" to="/view-curriculum">View Curriculum</NavLink></li>
//                     <li> <NavLink className="link" activeclassname="active" to="/course-tracker">Course Tracker</NavLink></li>
//                 </ul>
//             </nav>
//             <nav>
//                 <ul className="nav__links app__links">
//                     <ProfileModalButton />
//                     <li>
//                         <a className="link" style={{color: "#000"}} href="#">Apps Dashboard</a>
//                     </li>
//                 </ul>
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
                            <span style={{color: "#000", paddingRight: "10px", fontWeight: "500", textDecoration: "none", fontSize: "14px"}}>Curriculum App</span>

                        </div>
                        {/* <div style={{fontSize: "18px"}}><span style={{color: "#923d41", paddingRight: "10px", fontWeight: "600", textDecoration: "none"}}>Curriculum</span> App</div> */}
                    </div>
                </Navbar.Brand>
                
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className='me-5'>
                        <Nav className="me-auto">
                            <Nav.Link><NavLink className="link" activeclassname="active" to="/">Home</NavLink></Nav.Link>
                            <Nav.Link><NavLink className="link" activeclassname="active" to="/view-curriculum">View Curriculum</NavLink></Nav.Link>
                            <Nav.Link><NavLink className="link" activeclassname="active" to="/course-tracker">Course Tracker</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Text>
                    <Navbar.Text>
                        <Nav className="me-auto">
                            <Nav.Link style={{paddingTop: "10px"}}><ProfileModalButton /></Nav.Link>
                            <Nav.Link href="https://apps.ashesi.edu.gh/" style={{color: "#000", paddingRight: "10px", fontWeight: "400", textDecoration: "none", fontSize: "14px"}}>Apps</Nav.Link>
                        </Nav>
                    </Navbar.Text>
                </Navbar.Collapse>
                    
            </Container>
        </Navbar>
    )
}

export default StudentNav