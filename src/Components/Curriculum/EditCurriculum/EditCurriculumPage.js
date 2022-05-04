import './EditCurriculum.css'
import './EditCurriculumPage.css'
import { FiEdit2, FiPlus } from "react-icons/fi";
import { fetchCurriculumByYearGroup } from '../../../serverRequests';
import { Link } from 'react-router-dom';
import { CreateCurriculum } from './CreateCurriculum';

import { useState, useEffect } from 'react'
import { fetchYearGroups } from '../../../serverRequests'

export const EditCurriculumPage = () => {

    const [ yearGroups, setYearGroups ] = useState([]);
    const [ curriculums, setCurriculums ] = useState([]);
    const [ displayCurriculums, setDisplayCurriculums ] = useState(false);
    const [ show, setShow ] = useState(false);
    const [ currentYearGroup, setCurrentYearGroup ] = useState("")

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        const getYearGroups = async () => {
            const yearGroupsFromServer = await fetchYearGroups();
            setYearGroups(yearGroupsFromServer);
        }

        getYearGroups();
    }, [])

    const getCurriculum = async (year_group_id) => {
        const curriculumsFromServer = await fetchCurriculumByYearGroup(year_group_id);
        setCurriculums(curriculumsFromServer);
        setDisplayCurriculums(true);
        setCurrentYearGroup(year_group_id);
    }

  return (
    <>
        <div className='edit-curriculum-body'>
            <div className='edit-curriculum-hero'>
                <div>
                    <h3 className='sub-title'>Edit Curriculum</h3>
                    <p className='headline-text'>Turpis est nunc nulla aliquam enim montes, massa at. <br /> Lectus sagittis, diam a arcu, mi aliquam. </p>
                </div>
                <div className='hero-item'>
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
            </div>
        </div>
        <div className='year-groups-container'>
            {
                (!displayCurriculums) ? (<div className='year-groups'>Please choose a year group</div>)
                : (
                    <div className='year-groups'>
                        {
                            (curriculums.length == 0) ? (<p>There are no curricula for this year group yet. Click on the Plus icon to create one</p>)
                            : curriculums.map((value, index) => (
                                <div key={index} className='year-group'>
                                    <p className='headline-text'>
                                        4 year curriculum for Management Information Systems 2021
                                    </p>
                                    <Link to={`${value.curriculum_id}`} className='year-group-edit'>
                                        <FiEdit2 />
                                    </Link>
                                </div>
                            ))
                        }
                        <div className='year-group-edit' onClick={handleShow}>
                            <FiPlus />
                        </div> 
                        <CreateCurriculum show={show} handleClose={handleClose} currentYearGroup={currentYearGroup} />

                    </div>
                )
            }
            
        </div>
    </>
  )
}
