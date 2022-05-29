import { useState, useEffect } from 'react'
import './SearchCard.css';
import { SearchPrerequisites } from './SearchPrerequisites';

export const SearchCard = ({ courses }) => {    

  return (
    courses.map((course) => (
        <div className='search-card-border'>
        <div className='main-course-grid'>
            <div>
                <h5>{course.course_name}</h5>
                <h6>Credits: {course.course_unit} </h6>
            </div>
            <div className='main-course-grade'>
                <p className='headline-text'>Pass Grade: {course.grade_letter}</p>
            </div>
        </div>
        <div>
            <h5>Prerequisites</h5>
            <div className='prerequisite-courses-grid'>
                <SearchPrerequisites prerequisites={course.prerequisites} />
            </div>
        </div>
    </div>
    ))
  )
}
