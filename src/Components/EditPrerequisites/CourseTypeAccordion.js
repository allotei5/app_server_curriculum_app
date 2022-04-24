import {useState, useEffect } from 'react'
import { Accordion, Button } from 'react-bootstrap'
import { AddPrerequisite } from './AddPrerequisite';
import { Prerequisites } from './Prerequisites';

export const CourseTypeAccordion = ({ courseType, newKey }) => {  

    const [courses, setCourses] = useState([])

    useEffect(() => {
        const getCourses = async () => {
            const coursesFromServer = await fetchCourses();
            setCourses(coursesFromServer);
        }

        getCourses();
    }, [])


    const fetchCourses = async () => {
        const res = await fetch(`http://localhost/app_server_curriculum_app/server/actions/courses/get_all_courses_formatted_by_type.php?course_type_id=${courseType.course_type_id}`);
        const data = await res.json();
        // console.log(data)
        return data;
    }
// hi
  return (
    <>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey={newKey}>
                <Accordion.Header>{courseType.course_type_name}</Accordion.Header>
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
