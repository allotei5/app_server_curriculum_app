import { useState, useEffect, useContext } from 'react';

import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

import {  Button } from "react-bootstrap"

import { fetchDepartments, fetchYearGroups, fetchMajors } from "../../serverRequests";

import { UserContext } from '../../Context/UserContext';

import './ProfileModal.css';


export const ProfileModal = ({ show, handleClose}) => {

    const [ departments, setDepartments ] = useState([])
    const [ yearGroups, setYearGroups ] = useState([]);
    const [ majors, setMajors ] = useState([]);

    

    useEffect(() => {

        const getDepartments = async () => {
            const departments = await fetchDepartments();
            setDepartments(departments);
        }

        const getYearGroups = async () => {
            const groups = await fetchYearGroups();
            setYearGroups(groups);
        }

        const getMajors = async () => {
            const majors = await fetchMajors();
            setMajors(majors);
        }

        getDepartments();
        getYearGroups();
        getMajors();

    }, [])

    const { currentUser, setCurrentUser } = useContext(UserContext);

    const studentDetails = (currentUser.student_details !== undefined) ? (currentUser.student_details) : (null);

    const [ formDepartment, setFormDepartment ] = useState((studentDetails) ? (studentDetails.student_dept) : "");
    const [ formYearGroup, setFormYearGroup ] = useState((studentDetails) ? (studentDetails.student_year_group) : "");
    const [ formMajors, setFormMajors ] = useState((studentDetails) ? (studentDetails.student_major) : "");

    const [ formDepartmentName, setFormDepartmentName ] = useState((studentDetails) ? (studentDetails.department_name) : "");
    const [ formYearGroupName, setFormYearGroupName ] = useState((studentDetails) ? (studentDetails.year_group_name) : "");
    const [ formMajorsName, setFormMajorsName ] = useState((studentDetails) ? (studentDetails.major_name) : "");

    const [ success, setSuccess ] = useState(false);
    const [ formError, setFormError ] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        // submit form to backend
        // checking if new values have been entered
        if (studentDetails !== null) {
            // basically check if any of the fields have changed
            if (formDepartment !== studentDetails.student_dept || formYearGroup !== studentDetails.student_year_group || formMajors !== studentDetails.student_major) {
                const updatedUser = {
                    ...currentUser,
                    student_details: {
                        student_dept: formDepartment,
                        department_name: formDepartmentName,
                        student_year_group: formYearGroup,
                        year_group_name: formYearGroupName,
                        major_id: formMajors,
                        major_name: formMajorsName
                    }
                }

                console.log(updatedUser);
                setCurrentUser(updatedUser);
                setSuccess(true);

                // submit form to backend

                setTimeout(() => {
                    handleClose();
                    setSuccess(false)
                }, 1500)

            }else {
                handleClose();
            }

        }else {
            handleClose();
        }
        
    }

  return (
    <>
    <Modal show={show} onHide={handleClose} animation={false}>
        <ModalHeader closeButton>
            <ModalTitle>Update Profile</ModalTitle>
        </ModalHeader>
        <ModalBody>
            <form onSubmit={ e => onSubmit(e)}>
                {
                    (success) ? <div className="profile-form" style={{color: "green"}}> Profile Updated successfully</div>
                    : ""
                }
                {
                    (formError) ? <div className="profile-form" style={{color: "maroon"}}>All fields are required</div>
                    : ""
                }
                

                <div className="profile-form">
                    <label>Choose your department</label>
                    <div>
                        <select className="form-select" required onChange={ e => {setFormDepartment(e.target.value); setFormDepartmentName(e.target.options[e.target.selectedIndex].text)}} >
                            {
                                (studentDetails) ? (<option value={studentDetails.department_id}>{studentDetails.department_name}</option>) : <option selected disabled>Department</option>
                            }
                            {
                                departments.map((dept) => (<option key={dept.department_id} value={dept.department_id}>{dept.department_name}</option>))
                            }
                        </select>
                    </div>
                </div>

                <div className="profile-form">
                    <label>Choose your year group</label>
                    <div>
                        <select className="form-select" required onChange={ e => {setFormYearGroup(e.target.value); setFormYearGroupName(e.target.options[e.target.selectedIndex].text)} }>
                            {
                                (studentDetails) ? (<option value={studentDetails.year_group_id}>{studentDetails.year_group_name}</option>) : <option selected disabled>Year group</option>

                            }
                            {
                                yearGroups.map((group) => (<option key={group.year_group_id} value={group.year_group_id}>{group.year_group_name}</option>))
                            }
                        </select>
                    </div>
                </div>

                <div className="profile-form">
                    <label>Choose your Major</label>
                    <div>
                        <select className="form-select" required onChange={ e => {setFormMajors(e.target.value); setFormMajorsName(e.target.options[e.target.selectedIndex].text)} }>
                            {
                                (studentDetails) ? (<option value={studentDetails.major_id}>{studentDetails.major_name}</option>) : (<option selected disabled>Major</option>)
                            }
                            {
                                majors.map((major) => (<option key={major.major_id} value={major.major_id}>{major.major_name}</option>))
                            }
                        </select>
                    </div>
                </div>
                
                <div className="profile-form">
                    <small style={{color: "maroon"}}>Please Note! When you update your details you will lose all progress on the Curriculum tracking page</small>
                </div>

                <div className="profile-form">

                    <button type='submit' className='btn btn-primary'>Update</button>
                </div>

            </form>
        </ModalBody>
        <ModalFooter>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
        </ModalFooter>
    </Modal>
    </>
  )
}