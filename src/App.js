import { useContext, useState, useEffect } from 'react'
import { UserContext } from './Context/UserContext';

import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
// import { CourseTracker } from "./Components/CourseTracker/CourseTracke";
import { ViewCurriculum } from "./Components/Curriculum/ViewCurriculum/ViewCurriculum";
import { EditPrerequisites } from "./Components/EditPrerequisites/EditPrerequisites";
import { EditCurriculum } from "./Components/Curriculum/EditCurriculum/EditCurriculum";
import { EditCurriculumPage } from "./Components/Curriculum/EditCurriculum/EditCurriculumPage";
import CourseTracker from "./Components/CurriculumTracker/CourseTracker";
import { Loading } from './Components/Loading/Loading';

import { fetchLoggedInUser } from './serverRequests';
import { Footer } from './Components/Footer';
import { StudentList } from './Components/Students/StudentList';
import NotFound from './Components/404/NotFound';
import StudentRoutes from './Components/AuthRoutes/StudentRoutes';
import UnAuth from './Components/AuthRoutes/UnAuth';
import AuthStaffAndFaculty from './Components/AuthRoutes/AuthStaffAndFaculty';

function App() {

  // const [ user, setUser ] = useState({});

  const { currentUser, setCurrentUser } = useContext(UserContext);

  useEffect(()=> {
    const getLoggedInUser = async () => {
      try {
        const currentUser = await fetchLoggedInUser();

        if( currentUser.isLogedin !== undefined ) {
          window.location.href="https://apps.ashesi.edu.gh/app_server/login/login"
        }

        setCurrentUser(currentUser);
      } catch (error) {
        console.log(error)
      }
      
    }

    getLoggedInUser();
  }, [])

  // if user is a student
  if (currentUser != null && currentUser.user_role == 4) {
    return (
      (!currentUser) ? <Loading />:
      <>
        <StudentRoutes />
        <Footer />
      </>
    )
  } else if (currentUser != null && currentUser.user_role != 4 && currentUser.permissions?.user_permission_id == 1) {
    // if user is not a student and has permission
    return (
      (!currentUser) ? <Loading />:
      <>
        <AuthStaffAndFaculty />
        <Footer />
      </>
    )
  } else {
    // every one else
    return (
      (!currentUser) ? <Loading />:
      <>
        <UnAuth />
        <Footer />
      </>
    )
  }

}

export default App;
