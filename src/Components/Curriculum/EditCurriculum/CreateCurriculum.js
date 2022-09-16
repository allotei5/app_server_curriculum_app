import { useState, useEffect } from "react";

import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import {  Button } from "react-bootstrap"

import { fetchMajors } from "../../../serverRequests";


export const CreateCurriculum = ({ show, handleClose, currentYearGroup, addNewCurriculum }) => {
    const [ majors, setMajors ] = useState([]);
    const [ selectedMajor, setSelectedMajor ] = useState("");

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
            alert("choose a major")
        }
        const newCurriculum = {
            year_group_id: currentYearGroup,
            major_id: selectedMajor,
            user_id: 1
        }
        try {
            await addNewCurriculum(newCurriculum);
            handleClose()
        } catch (error) {
            alert('something went wrong please try again later')
        }
        
    }


  return (
    <>
        <Modal show={show} onHide={handleClose} animation={false}>
            <ModalHeader>
                <ModalTitle>Create a new Curriculum</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <form onSubmit={onSubmit}>
                    <label>Choose Major</label>
                    <select className="form-select" required onChange={e => setSelectedMajor(e.target.value)}>
                        <option selected disabled>Majors</option>
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
