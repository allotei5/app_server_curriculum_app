import {  Button } from "react-bootstrap"
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Select from 'react-select';
import { useState, useEffect } from 'react'

export const AddPrerequisite = ({show, handleClose}) => {
    const [course, setCourse] = useState([]);
    const [prerequisite, setPrerequisite] = useState('');

    // const file_path = "http://localhost/app_server_curriculum_app/server/actions/courses/get_all_courses.php";
    // fetch(file_path)
    // .then((res) => {
    //     // console.log(res)
    //     // console.log(res);
    //     return res.json()
    // })
    // .then(data => {
    //     console.log(data)
    // })

    useEffect(() => {
        const getCourses = async () => {
            const preparedCourses = await fetchCourses();
            setCourse(preparedCourses);
        }

        getCourses();
    }, []);

    const fetchCourses = async () => {
        const res = await fetch("http://localhost/app_server_curriculum_app/server/actions/courses/get_all_courses.php")
        const data = await res.json();
        const preparedCourses = [];
        data.forEach((course, index) => {
            let preparedCourse = {
                value: course.course_id,
                label: course.course_name
            }
            preparedCourses.push(preparedCourse);
        });
        console.log(preparedCourses);
        return preparedCourses;
    }

    const addPrerequisiteToServer = () => {

    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(prerequisite === '') {
            alert("Choose a prerequisite");
        }

    }


  return (
    <>
        <Modal show={show} onHide={handleClose} animation={false}>
            <ModalHeader closeButton>
                <ModalTitle>Add Course As Prerequisite</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <form onSubmit={onSubmit}>
                    <label>Choose Prerequisite</label>
                    <Select
                        options={course}
                        onChange={opt => setPrerequisite(opt.value)}
                    />
                    <button className="btn btn-primary" type="submit">Add Prerequisite</button>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </ModalFooter>
        </Modal>
    </>
  )
}
