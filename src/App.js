import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import CourseTracker from "./Components/CourseTracker";
import { ViewCurriculum } from "./Components/Curriculum/ViewCurriculum/ViewCurriculum";
import { EditPrerequisites } from "./Components/EditPrerequisites/EditPrerequisites";
import { EditCurriculum } from "./Components/Curriculum/EditCurriculum/EditCurriculum";
import { EditCurriculumPage } from "./Components/Curriculum/EditCurriculum/EditCurriculumPage";

function App() {
  return (
    
      <Routes>
        <Route exact path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/course-tracker" element={<CourseTracker/>} />
          <Route path="/view-curriculum" element={<ViewCurriculum />} />
          <Route path="/profile" element={<Home />} />
          <Route path="/edit-prerequisites" element={ <EditPrerequisites /> } />
          <Route path="/edit-prerequisite" element={ <EditPrerequisites /> } />
          <Route path="/edit-curriculum" element={ <EditCurriculumPage /> } />
          <Route path="/edit-curriculum/:curriculum_id" element={ <EditCurriculum /> } />
        </Route>
      </Routes>
  );
}

export default App;
