import { useState, useEffect } from 'react'
import { fetchCoursesFromCurriculum } from '../../../serverRequests';

import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


export const Courses = ({curriculum, year, semester}) => {
  const [ curriculumCourses, setCurriculumCourses ] = useState([]);
  useEffect(() => {
    const getCourses = async () => {
      const courses = await fetchCoursesFromCurriculum(curriculum, semester, year);
      setCurriculumCourses(courses);
      console.log(curriculumCourses);
    }

    getCourses();
  }, [curriculum])

  return (
    <div className="mb-3 mx-3">
      {
        (curriculumCourses.length !== 0) ? 
        curriculumCourses.map((course, index) => (
          <Row className="mb-2" key={index}>
            <Col md={5} className='cs-fs-2' style={{color: "#000", fontWeight: "500"}}>{course.course_name}</Col>
            <Col md={2} className='cs-fs-2'>Credits: {course.course_unit}</Col>
            <Col md={3} className='cs-fs-2'>Pass grade: {course.grade_letter}</Col>
            <Col md={2} className='cs-fs-2'>{course.course_type_name}</Col>
          </Row>
        )): <p className='cs-fs-2'>There are no courses for this semester</p>
      }
    </div>
  )
}

