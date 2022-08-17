import './EditCurriculum.css'
import './EditCurriculumPage.css'
import { FiEdit2, FiPlus, FiEdit } from "react-icons/fi";
import { createNewCurriculum, fetchCurriculumByYearGroup, fetchYearGroups } from '../../../serverRequests';
import { Link } from 'react-router-dom';
import { CreateCurriculum } from './CreateCurriculum';

import { useState, useEffect, useContext } from 'react'
import { Navigate } from 'react-router-dom';

import { UserContext } from '../../../Context/UserContext';

import { Container, Row, Col } from 'react-bootstrap'
import { EditCurriculumMajor } from './EditCurriculumMajor';


export const EditCurriculumPage = () => {
    const { currentUser } = useContext(UserContext)

    const [ yearGroups, setYearGroups ] = useState([]);
    const [ curriculums, setCurriculums ] = useState([]);
    const [ displayCurriculums, setDisplayCurriculums ] = useState(false);
    const [ show, setShow ] = useState(false);
    const [ editShow, setEditShow ] = useState(false);
    const [ currentYearGroup, setCurrentYearGroup ] = useState("")

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleEditShow = () => setEditShow(true);
    const handleEditClose = () => setEditShow(false);

    useEffect(() => {
        const getYearGroups = async () => {
            const yearGroupsFromServer = await fetchYearGroups();
            setYearGroups(yearGroupsFromServer);
        }

        getYearGroups();
    }, [])

    const getCurriculum = async (year_group_id) => {
        const curriculumsFromServer = await fetchCurriculumByYearGroup(year_group_id);
        console.log(curriculumsFromServer);
        setCurriculums(curriculumsFromServer);
        setDisplayCurriculums(true);
        setCurrentYearGroup(year_group_id);
    }

    const addNewCurriculum = async (curriculum) => {
        const newCurriculum = await createNewCurriculum(curriculum);
        setCurriculums([...curriculums, newCurriculum]);
    }

    // if (currentUser.permissions === undefined) {
    //     return <Navigate to="/" replace />
    // } 

    // if (currentUser.permissions !== undefined && currentUser.permissions.user_permission_id == 1) {
    //     return <Navigate to="/" replace />
    // }

  return (
    <>
        <Container>
            <Row>
                <Col>
                    <h3 className='cs-fs-3'>Edit Curriculum</h3>
                    <p className='cs-fs-2'>Turpis est nunc nulla aliquam enim montes, massa at. Lectus sagittis, diam a arcu, mi aliquam. </p>
                </Col>
                <Col className='hero-item d-flex flex-row-reverse'>
                    <div>
                        <h6>Choose Year Group</h6>
                        <select className='select-input' onChange={async (e) => getCurriculum(e.target.value)}>
                            <option selected disabled>Year Group</option>
                            {
                                yearGroups.map((year, index) => (
                                    <option key={index} value={year.year_group_id}>{year.year_group_name}</option>
                                ))
                            }
                        </select>
                    </div>
                    
                </Col>
            </Row>
        </Container>
        <div className='year-groups-container'>
            {
                (!displayCurriculums) ? (<Container className='year-groups'>Please choose a year group</Container>)
                : (
                    <Container className='year-groups'>
                        {
                            (curriculums.length == 0) ? (<p>There are no curricula for this year group yet. Click on the Plus icon to create one</p>)
                            : curriculums.map((value, index) => (
                                <Container key={index} className='year-group'>
                                    <Row>
                                        <Col>
                                            <p className='headline-text'>
                                                4 year curriculum for {value.major_name} {value.year_group_name}
                                            </p>
                                        </Col>
                                        
                                        <Col>
                                            <Link to={`${value.curriculum_id}`}>
                                                <button className='year-group-edit'>
                                                    <FiEdit2 />
                                                </button>
                                            </Link>
                                            <button className='year-group-edit ms-3' style={{backgroundColor: "orange"}} onClick={handleEditShow}>
                                                <FiEdit />
                                            </button>
                                            <EditCurriculumMajor show={editShow} handleClose={handleEditClose} currentYearGroup={currentYearGroup} currentCurriculum={value} setCurriculums={setCurriculums} curriculums={curriculums} />
                                        </Col>
                                    </Row>
                                    
                                </Container>
                            ))
                        }
                        <Row>
                        <div >
                            <button className='year-group-edit' onClick={handleShow}>
                                <FiPlus />
                            </button> 
                        </div> 
                        <CreateCurriculum show={show} handleClose={handleClose} currentYearGroup={currentYearGroup} addNewCurriculum={addNewCurriculum} />

                        </Row>
                        
                    </Container>
                )
            }
            
        </div>
    </>
  )
}
