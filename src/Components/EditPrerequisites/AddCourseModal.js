import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import {  Button } from "react-bootstrap"

import { useContext } from "react";
import { useState, useEffect } from "react";
import { GradeContext } from "../../Context/GradeContext";
import { createNewCourse, fetchGradeBreakDown } from "../../serverRequests";
import { Navigate } from "react-router-dom";


export const AddCourseModal = ({ show, handleClose, departments }) => {
    const [ grades, setGrades ] = useState([]);
    const [ formError, setFormError ] = useState(false);

    const [ formDept, setFormDept ] = useState("");
    const [ formCode, setFormCode ] = useState("");
    const [ formName, setFormName ] = useState("");
    const [ formUnit, setFormUnit ] = useState("");
    const [ formGrade, setFormGrade ] = useState("");

    useEffect(() => {
        const getGrades = async () => {
            const grades = await fetchGradeBreakDown()
            setGrades(grades);
        }
        getGrades();
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();
        setFormError(false);

        if(formDept !== "" || formCode !== "" || formName !== "" || formUnit !== "" || formGrade !== "") {
            const course = {
                dept: formDept,
                code: formCode,
                name: formName,
                unit: formUnit,
                grade: formGrade,
                submit: true
            }
            const newCourse = await createNewCourse(course);
            if(newCourse.response == true) {
                handleClose()
                return <Navigate to="/edit-prerequisite" replace />
            } else {
                setFormError(true);
            }
        }

    }
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
            <ModalHeader closeButton>
                <ModalTitle>Add Course As Prerequisite</ModalTitle>
            </ModalHeader>
            <ModalBody>
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
                            <option value="">Choose department</option>
                            {
                                departments.map((dept, index) => (<option key={index} value={dept.department_id}>{dept.department_name}</option>))
                            }
                        </select>
                    </div>
                    <div style={{marginBottom: "10px"}}>
                        <div>
                            <label>Course code</label>
                        </div>
                        <input className="form-control" type="text" placeholder="course code" onChange={ e => setFormCode(e.target.value) } required/>
                    </div>
                    <div style={{marginBottom: "10px"}}>
                        <div>
                            <label>Course Name</label>
                        </div>
                        <input className="form-control" type="text" placeholder="Course Name" onChange={ e => setFormName(e.target.value) } required />
                    </div>
                    <div style={{marginBottom: "10px"}}>
                        <div>
                            <label>Course unit</label>
                        </div>
                        <select className="form-select" required onChange={ e => setFormUnit(e.target.value) }>
                            <option value="">Units</option>
                            <option value="0.5">0.5</option>
                            <option value="1">1</option>
                        </select>
                    </div>
                    <div style={{marginBottom: "10px"}}>
                        <div>
                            <label>Minimum Grade</label>
                        </div>
                        <select className="form-select" required onChange={ e => setFormGrade(e.target.value) }>
                            <option value="">Grade</option>
                            {
                                grades.map((grade, index) => (<option key={index} value={grade.grade_id}>{grade.grade_letter}</option>))
                            }
                            
                        </select>
                    </div>               
                    
                    <button className="btn btn-primary" style={{marginTop: "10px"}} type="submit">Add Course</button>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </ModalFooter>
        </Modal>
  )
}
