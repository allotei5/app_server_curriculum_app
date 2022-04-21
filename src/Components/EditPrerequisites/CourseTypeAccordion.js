import {useState, useEffect } from 'react'
import { Accordion, Button } from 'react-bootstrap'
import { AddPrerequisite } from './AddPrerequisite';

export const CourseTypeAccordion = ({ courseType, newKey }) => {
    const [show, setShow] = useState(false);
    const [prerequisites, setPrerequisites] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    const addNewPrerequisite = async (newPrerequisite) => {
        const res = await fetch("http://localhost/app_server_curriculum_app/server/actions/prerequisites/add_new_prerequisite.php", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newPrerequisite)
        });

        const data = await res.json();
        if(data.response === true) {
            setPrerequisites([...prerequisites, newPrerequisite]);
        }else{
            console.log("hmm");
        }
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
                            <div key={index} className='grid grid-course-main' style={{marginBottom: "10px"}}>
                                <div>
                                    {value.course_name}
                                </div>
                                <div className='grid grid-courses'>
                                    <Button onClick={handleShow} > Add Prerequisite </Button>
                                    <AddPrerequisite addNewPrerequisite={addNewPrerequisite} courseId={value.course_id} show={show} handleClose={handleClose} />
                                </div>
                            </div>
                        ))
                    }
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </>
  )
}
