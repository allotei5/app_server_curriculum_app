import { useContext, useEffect, useState } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import ashesi_logo from "../Images/ashesi_logo.png"
import './Nav.css';

import { UserContext } from "../Context/UserContext";
import { ProfileModalButton } from "./Profile/ProfileModalButton";
import AdminNav from "./Nav/AdminNav";
import StudentNav from "./Nav/StudentNav";
import AlumNav from "./Nav/AlumNav";

const Nav = () => {

  const { currentUser } = useContext(UserContext);
  return (
    <>
      {
        (currentUser.user_role == 1 || currentUser.user_role == 2) ? <AdminNav currentUser={currentUser} /> : ""
      }
      {
        (currentUser.user_role == 4) ? <StudentNav currentUser={currentUser} /> : ""
      }
      {
        (currentUser.user_role == 5 || currentUser.user_role == 3 ) ? <AlumNav currentUser={currentUser} /> : ""
      }
      <Outlet />
    </>
  );
}

export default Nav;