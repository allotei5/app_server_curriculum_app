import { useState, useEffect } from "react";

import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import {  Button } from "react-bootstrap"

import { fetchMajors } from "../../../serverRequests";


export const CreateCurriculum = ({ show, handleClose, currentYearGroup }) => {
    const [ majors, setMajors ] = useState([]);

    useState(() => {
        const getMajors = async () => {
            const majorsFromServer = await fetchMajors();
            setMajors(majorsFromServer);
        }
        getMajors();
    }, [])
  return (
    <>
        <Modal show={show} onHide={handleClose} animation={false}>
            <ModalHeader>
                <ModalTitle>Create a new Curriculum</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <form>
                    <label>Choose Major</label>
                    <select className="form-select" required>
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
