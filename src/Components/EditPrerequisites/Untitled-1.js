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
    </Route>
</Routes>