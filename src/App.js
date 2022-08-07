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

function App() {

  // const [ user, setUser ] = useState({});

  const { currentUser, setCurrentUser } = useContext(UserContext);

  useEffect(()=> {
    const getLoggedInUser = async () => {
      const currentUser = await fetchLoggedInUser();
      console.log(currentUser);
      setCurrentUser(currentUser);
    }

    getLoggedInUser();
  }, [])

  return (
    
      (!currentUser) ? <Loading /> 
      : <>
          <Routes>
            <Route exact path="/" element={<Nav />}>
              <Route index element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/course-tracker" element={ <CourseTracker /> } />
              <Route path="/course-tracker/:user_id" element={ <CourseTracker /> } />
              <Route path="/view-curriculum" element={<ViewCurriculum />} />
              <Route path="/profile" element={<Home />} />
              <Route path="/edit-prerequisites" element={ <EditPrerequisites /> } />
              <Route path="/edit-prerequisite" element={ <EditPrerequisites /> } />
              <Route path="/edit-curriculum" element={ <EditCurriculumPage /> } />
              <Route path="/edit-curriculum/:curriculum_id" element={ <EditCurriculum /> } />
              <Route path="/students" element={<StudentList />} />
              <Route path="/students/:page" element={<StudentList />} />
            </Route>
          </Routes>
          <Footer />
        </>
    
  );
}

export default App;
