import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Nav from '../Nav'
import Home from '../Home'
import NotFound from '../404/NotFound'
import { ViewCurriculum } from '../Curriculum/ViewCurriculum/ViewCurriculum'
import CourseTracker from '../CurriculumTracker/CourseTracker'
import { EditPrerequisites } from '../EditPrerequisites/EditPrerequisites'
import { EditCurriculumPage } from '../Curriculum/EditCurriculum/EditCurriculumPage'
import { EditCurriculum } from '../Curriculum/EditCurriculum/EditCurriculum'
import { StudentList } from '../Students/StudentList'
import Tutorials from '../Tutorials'

const AuthStaffAndFaculty = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/course-tracker" element={ <CourseTracker /> } />
            <Route path="/course-tracker/:user_id" element={ <CourseTracker /> } />
            <Route path="/view-curriculum" element={<ViewCurriculum />} />
            <Route path="/edit-prerequisites" element={ <EditPrerequisites /> } />
            <Route path="/edit-prerequisite" element={ <EditPrerequisites /> } />
            <Route path="/edit-curriculum" element={ <EditCurriculumPage /> } />
            <Route path="/edit-curriculum/:curriculum_id" element={ <EditCurriculum /> } />
            <Route path="/students" element={<StudentList />} />
            <Route path="/students/:page" element={<StudentList />} />
            <Route path="/tutorials" element={<Tutorials />} />

        </Route>
    </Routes>
  )
}

export default AuthStaffAndFaculty