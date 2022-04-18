import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import CourseTracker from "./Components/CourseTracker";
import { ViewCurriculum } from "./Components/ViewCurriculum";
import { EditPrerequisites } from "./Components/EditPrerequisites/EditPrerequisites";

function App() {
  return (
    
      <Routes>
        <Route exact path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/course-tracker" element={<CourseTracker/>} />
          <Route path="/view-curriculum" element={<ViewCurriculum />} />
          <Route path="/profile" element={<Home />} />
          <Route path="/edit-prerequisites" element={ <EditPrerequisites /> } />
        </Route>
      </Routes>
  );
}

export default App;
