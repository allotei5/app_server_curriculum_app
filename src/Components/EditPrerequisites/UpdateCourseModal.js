import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import {  Button } from "react-bootstrap"

import { useState, useEffect } from "react";
import { GradeContext } from "../../Context/GradeContext";
import { createNewCourse, fetchCourse, fetchCourses, fetchGradeBreakDown, updateCourse, fetchCoursesOnly } from "../../serverRequests";
import { Navigate } from "react-router-dom";
import Select from "react-select";

export const UpdateCourseModal = ({ show, handleClose, departments }) => {

    const [ formCourse, setFormCourse ] = useState([]);
    const [ formDept, setFormDept ] = useState("");
    const [ formCode, setFormCode ] = useState("");
    const [ formName, setFormName ] = useState("");
    const [ formUnit, setFormUnit ] = useState("");
    const [ formGrade, setFormGrade ] = useState("");
    const [ courseId, setCourseId ] = useState("");
    const [ courses, setCourses ] = useState({});

    const [ grades, setGrades ] = useState([]);
    const [ formError, setFormError ] = useState(false);

    useEffect(() => {
        const getGrades = async () => {
            const grades = await fetchGradeBreakDown()
            setGrades(grades);
        }

        const getCourses = async () => {
            const courses = await fetchCoursesOnly();
            let preparedCourses =[];
            courses.forEach((value, index) => {
                preparedCourses.push({
                    label: value.course_name,
                    value: value.course_id
                })
            })
            setCourses(preparedCourses)
        }
        getGrades();
        getCourses();
    }, [])

    useEffect(() => {
        const getCourse = async (id) => {
            const course = await fetchCourse(id);
            setFormCourse(course);
            setFormCode(course.course_code)
            setFormName(course.course_name)
            setFormGrade(course.course_min_grade)
            setFormUnit(course.course_unit)
            setFormDept(course.course_dept)
            console.log(course);
        }

        getCourse(courseId)
    }, [courseId])

    const onSubmit = async (e) => {
        e.preventDefault();
        setFormError(false);

        if(formDept !== "" || formCode !== "" || formName !== "" || formUnit !== "" || formGrade !== "") {
            const course = {
                course_id: courseId,
                dept: formDept,
                code: formCode,
                name: formName,
                unit: formUnit,
                grade: formGrade,
                submit: true
            }

            const update = await updateCourse(course);
            if(update.response == true) {
                // handleClose()
                window.location.reload()
            } else {
                setFormError(true)
            }
        }
    }

  return (
    <Modal show={show} onHide={handleClose} animation={false}>
            <ModalHeader closeButton>
                <ModalTitle>Update Existing Course</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <div>
                    <label>Choose course to update</label>
                </div>
                <Select options={courses} onChange={ opt => setCourseId(opt.value) } />
                {
                    (courseId === "") ? ""
                        :
                    <form onSubmit={ (e) => onSubmit(e) }>
                        {
                            (formError) ? <div className="profile-form" style={{color: "maroon"}}>Server error please try again later</div>
                            : ""
                        }
                        <div style={{marginBottom: "10px"}}>
                            <div>
                                <label>Department</label>
                            </div>
                            <select required className="form-select" onChange={ e => setFormDept(e.target.value)}>
                                <option value={formCourse.course_dept}>{formCourse.department_name}</option>
                                {
                                    departments.map((dept, index) => (<option key={index} value={dept.department_id}>{dept.department_name}</option>))
                                }
                            </select>
                        </div>
                        <div style={{marginBottom: "10px"}}>
                            <div>
                                <label>Course code</label>
                            </div>
                            <input className="form-control" type="text" placeholder="course code" value={formCode} onChange={ e => setFormCode(e.target.value) } required/>
                        </div>
                        <div style={{marginBottom: "10px"}}>
                            <div>
                                <label>Course Name</label>
                            </div>
                            <input className="form-control" type="text" placeholder="Course Name" value={formName} onChange={ e => setFormName(e.target.value) } required />
                        </div>
                        <div style={{marginBottom: "10px"}}>
                            <div>
                                <label>Course unit</label>
                            </div>
                            <select className="form-select" required onChange={ e => setFormUnit(e.target.value) }>
                                <option value={formCourse.course_unit}>{formCourse.course_unit}</option>
                                <option value="0.5">0.5</option>
                                <option value="1">1</option>
                            </select>
                        </div>
                        <div style={{marginBottom: "10px"}}>
                            <div>
                                <label>Minimum Grade</label>
                            </div>
                            <select className="form-select" required onChange={ e => setFormGrade(e.target.value) }>
                                <option value={formCourse.course_min_grade}>{formCourse.grade_letter}</option>
                                {
                                    grades.map((grade, index) => (<option key={index} value={grade.grade_id}>{grade.grade_letter}</option>))
                                }
                                
                            </select>
                        </div>               
                        
                        <button className="btn btn-primary" style={{marginTop: "10px"}} type="submit">Update Course</button>
                    </form>
                }       
            </ModalBody>
            <ModalFooter>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </ModalFooter>
        </Modal>
  )
}
