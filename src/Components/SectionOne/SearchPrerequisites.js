import React from 'react'

export const SearchPrerequisites = ({prerequisites}) => {
  return (
    (prerequisites.length == 0) ? <p>There are no prerequisites for this course</p>
    : prerequisites.map((prerequisite) => (
        <div className='prerequisite-course'>
            <p className='prerequisite-course-name'>{prerequisite.course_name}</p>
            <p className='prerequisite-course-grade'>Pass Grade: {prerequisite.grade_letter}</p>
        </div>
    ))
  )
}
