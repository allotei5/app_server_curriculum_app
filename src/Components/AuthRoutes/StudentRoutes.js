import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Nav from '../Nav'
import Home from '../Home'
import NotFound from '../404/NotFound'
import CourseTracker from '../CurriculumTracker/CourseTracker'
import { ViewCurriculum } from '../Curriculum/ViewCurriculum/ViewCurriculum'

const StudentRoutes = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Nav />}>
              <Route index element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/course-tracker" element={ <CourseTracker /> } />
              <Route path="/view-curriculum" element={<ViewCurriculum />} />
        </Route>
    </Routes>
  )
}

export default StudentRoutes

