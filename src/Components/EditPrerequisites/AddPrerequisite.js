import {  Button } from "react-bootstrap"
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Select from 'react-select';
import { useState, useEffect } from 'react'

export const AddPrerequisite = ({show, handleClose, courseId, addNewPrerequisite}) => {
    const [course, setCourse] = useState([]);
    const [prerequisite, setPrerequisite] = useState('');
    const [formMinimumGrade, setFormMinimumGrade] = useState('');
    const [minimumGrades, setMinimumGrades] = useState([]);


    useEffect(() => {
        const getCourses = async () => {
            const preparedCourses = await fetchCourses();
            setCourse(preparedCourses);
        }
        const getGrades = async () => {
            const gradesFromServer = await fetchGradeBreakDown();
            setMinimumGrades(gradesFromServer);
        }

        getCourses();
        getGrades();
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
        // console.log(preparedCourses);
        return preparedCourses;
    }

    const fetchGradeBreakDown = async () => {
        const res = await fetch("http://localhost/app_server_curriculum_app/server/actions/courses/get_grade_breakdown.php");
        const data = await res.json();
        return data;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(prerequisite === '') {
            alert("Choose a prerequisite");
        }
        if(formMinimumGrade === '') {
            alert("Choose minimum grade");
        }

        addNewPrerequisite({
            course_id: courseId,
            prerequisite_course_id: prerequisite,
            min_grade_id: formMinimumGrade,
            submit: true
        });
        setFormMinimumGrade("");
        setPrerequisite("");
        handleClose();

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
                    <div>
                        <label>Choose minimum Grade</label>
                        <div>
                            <select className="form-select" required onChange={opt => setFormMinimumGrade(opt.target.value) } >
                                <option defaultValue disabled>Minimum Grades</option>
                                {
                                    minimumGrades.map((value, index) => (
                                        <option key={index} value={value.grade_id}>{value.grade_letter}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <button className="btn btn-primary" style={{marginTop: "10px"}} type="submit">Add Prerequisite</button>
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
