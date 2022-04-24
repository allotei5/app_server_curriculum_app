import { useState, useEffect } from 'react'
import './SearchCard.css';
import { SearchPrerequisites } from './SearchPrerequisites';

export const SearchCard = ({ courses }) => {    

    const [ searchedCourses, setSearchCourses ] = useState([]);
    console.log(courses);

    // setSearchCourses(courses.filter((course) => {
    //     let regex = new RegExp(searchTerm);
    //     return regex.test(course.course_name);
    // }))
    // console.log(courses.filter((value) => {
    //     let regex = new RegExp(`${searchTerm}`);
    //     // console.log(regex.test('calculus 1'))
    //     return regex.test(value.course_name.toLowerCase());
    // }));
    // let regex = new RegExp(`${searchTerm}`);
    // console.log(regex.test('Calculus 1'.toLowerCase()))


    // console.log(searchTerm);
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
