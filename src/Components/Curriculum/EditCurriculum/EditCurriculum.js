import { useContext } from 'react';
import { useState, useEffect } from 'react'
import { UserContext } from '../../../Context/UserContext';
import { CurriculumYearAccordion } from './CurriculumYearAccordion'
import './EditCurriculum.css'
import { Link, Navigate } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap'
import { fetchLevels } from '../../../serverRequests';

import Button from '../../Button';


export const EditCurriculum = () => {

    const [ academicYears, setAcademicYears ] = useState([]);
    const { currentUser } = useContext(UserContext);

    useEffect(() => {
        const getAcademicYears = async () => {
            const academicYearsFromServer = await fetchLevels();
            // console.log(academicYearsFromServer)
            setAcademicYears(academicYearsFromServer);
        }

        getAcademicYears();
    }, []);


    // if (currentUser.permissions === undefined) {
    //     return <Navigate to="/" replace />
    // } 

    // if (currentUser.permissions !== undefined && currentUser.permissions.user_permission_id == 1) {
    //     return <Navigate to="/" replace />
    // }

  return (
      <>
        <Container className='edit-curriculum-body'>
            <Row className='edit-curriculum-hero'>
                <Col>
                    <h3 className='sub-title'>Edit Curriculum</h3>
                    {/* <p className='headline-text'>Turpis est nunc nulla aliquam enim montes, massa at. <br /> Lectus sagittis, diam a arcu, mi aliquam. </p> */}
                </Col>
                <Col className='hero-item'>
                    <Button ButtonName="Back" ButtonStyle="button primary-button" ButtonSrc="/edit-curriculum"/>
                </Col>
            </Row>
        </Container>
        <div className='edit-curriculum'>
            <Container>
                {
                    academicYears.map((year, index) => (
                        <CurriculumYearAccordion key={index} year={year} />
                    ))
                }
            </Container>
        </div>
    </>
  )
}
