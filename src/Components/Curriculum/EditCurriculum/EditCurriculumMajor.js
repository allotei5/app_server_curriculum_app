import { useState, useEffect } from "react";

import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import {  Button } from "react-bootstrap"

import { editCurriculum, fetchMajors } from "../../../serverRequests";


export const EditCurriculumMajor = ({ show, handleClose, currentYearGroup, setCurriculums, currentCurriculum, curriculums }) => {
    const [ majors, setMajors ] = useState([]);
    const [ selectedMajor, setSelectedMajor ] = useState("");
    const [ selectedMajorName, setSelectedMajorName ] = useState("");

    useEffect(() => {
        const getMajors = async () => {
            const majorsFromServer = await fetchMajors();
            setMajors(majorsFromServer);
        }
        getMajors();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();

        if(selectedMajor === "") {
            handleClose();
        }

        const newCurriculum = {
            year_group_id: currentYearGroup,
            major_id: selectedMajor,
            curriculum_id: currentCurriculum.curriculum_id,
            major_name: selectedMajorName
        }

        try {
            await editCurriculum(newCurriculum);
            setCurriculums(curriculums.map(prevState => prevState.curriculum_id == newCurriculum.curriculum_id ? newCurriculum : prevState))
            handleClose();
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
        <Modal show={show} onHide={handleClose} animation={false}>
            <ModalHeader>
                <ModalTitle>Edit Curriculum Detail</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <form onSubmit={onSubmit}>
                    <label>Choose Major</label>
                    <select className="form-select" required onChange={e => {setSelectedMajor(e.target.value); setSelectedMajorName(e.target.options[e.target.selectedIndex].text)}}>
                        <option value="">{currentCurriculum.major_name}</option>
                        {
                            majors.map((major, index) => (<option key={index} value={major.major_id}>{major.major_name}</option>))
                        }
                    </select>
                    <button className="btn btn-primary" type="submit" style={{marginTop: "10px"}}>Create</button>
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
