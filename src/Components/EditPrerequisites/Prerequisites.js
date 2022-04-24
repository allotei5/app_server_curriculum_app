import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { AddPrerequisite } from './AddPrerequisite';
import { CourseButton } from './CourseButton';
import { FiPlus } from "react-icons/fi";

export const Prerequisites = ({course}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [prerequisites, setPrerequisites] = useState([]);

    useEffect(() => {
        const getPrerequisites = async () => {
            const prerequisitesFromServer = await fetchPrerequisites(course.course_id);
            console.log(prerequisitesFromServer.prerequisites)
            setPrerequisites(prerequisitesFromServer.prerequisites);
        }

        getPrerequisites();
    }, [])

    const fetchPrerequisites = async (course_id) => {
        const res = await fetch(`http://localhost/app_server_curriculum_app/server/actions/prerequisites/get_one_course_prerequisites.php?course_id=${course_id}`);
        const data = await res.json();
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

        console.log(newPrerequisite);

        const data = await res.json();
        if(data.course_id) {
            setPrerequisites([...prerequisites, data]);
        }else{
            console.log("hmm");
        }
    }

    const removePrerequisite = async (pre_requisite_id) => {
        const res = await fetch("http://localhost/app_server_curriculum_app/server/actions/prerequisites/delete_prerequisite.php", {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                course_id: pre_requisite_id
            })
        });

        const data = await res.json();
        console.log(data)
        if(data.response === true) {
            setPrerequisites(prerequisites.filter((value, index) => (value.pre_requisite_id !== pre_requisite_id)))
        }
    }

  return (
    <div className='grid grid-course-main' style={{marginBottom: "10px"}}>
        <div>
            {course.course_name}
        </div>
        <div className='grid grid-courses'>
            {
                prerequisites.map((value, index) => (
                    // <Button key={index}> {value.course_name} </Button>
                    <CourseButton removePrerequisite={removePrerequisite}  course={value} key={index} />
                ))
            }

            {/* <Button onClick={handleShow} > Add Prerequisite </Button> */}
            <div onClick={handleShow} style={{padding: "10px 0"}}>
                  <div style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    backgroundColor: "#0A7AFF",
                    textAlign: "center",
                    color: "#fff",
                    cursor: "pointer",
                    float: "left"
                  }}>
                    <FiPlus />
                  </div>
                  <span style={{
                      fontSize: "12px",
                      paddingLeft: "5px"
                  }}>Add</span>
                </div>
            <AddPrerequisite addNewPrerequisite={addNewPrerequisite} courseId={course.course_id} show={show} handleClose={handleClose} />
        </div>
    </div>
  )
}
