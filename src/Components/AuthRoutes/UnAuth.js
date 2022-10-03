import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Nav from '../Nav'
import Home from '../Home'
import NotFound from '../404/NotFound'
import { ViewCurriculum } from '../Curriculum/ViewCurriculum/ViewCurriculum'
import Tutorials from '../Tutorials'

const UnAuth = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/view-curriculum" element={<ViewCurriculum />} />
            <Route path="/tutorials" element={<Tutorials />} />

        </Route>
    </Routes>
  )
}

export default UnAuth