import {useState, useEffect } from 'react'
import { Accordion, Button } from 'react-bootstrap'
import { fetchCoursesByDepartment } from '../../serverRequests';
import { AddPrerequisite } from './AddPrerequisite';
import { Prerequisites } from './Prerequisites';

export const CourseTypeAccordion = ({ department, newKey }) => {  

    const [courses, setCourses] = useState([])

    useEffect(() => {
        const getCourses = async () => {
            const coursesFromServer = await fetchCoursesByDepartment(department.department_id);
            setCourses(coursesFromServer);
        }

        getCourses();
    }, [])

// hi
  return (
    <>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey={newKey}>
                <Accordion.Header>{department.department_name}</Accordion.Header>
                <Accordion.Body>
                    {
                        courses.map((value, index) => (
                            <Prerequisites course={value} key={index} />
                        ))
                    }
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </>
  )
}
