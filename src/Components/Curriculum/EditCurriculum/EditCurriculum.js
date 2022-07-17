import { useContext } from 'react';
import { useState, useEffect } from 'react'
import { UserContext } from '../../../Context/UserContext';
import { CurriculumYearAccordion } from './CurriculumYearAccordion'
import './EditCurriculum.css'
import { Navigate } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap'


export const EditCurriculum = () => {

    const [ academicYears, setAcademicYears ] = useState([]);
    const { currentUser } = useContext(UserContext);

    useEffect(() => {
        const getAcademicYears = async () => {
            const academicYearsFromServer = await fetchAcademicYears();
            setAcademicYears(academicYearsFromServer);
        }

        getAcademicYears();
    }, []);

    const fetchAcademicYears = async () => {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_SERVER}actions/curriculum/fetch_academic_years.php`);
        const data = await res.json();
        return data;
    }

    fetchAcademicYears();

    if (currentUser.permissions === undefined) {
        return <Navigate to="/" replace />
    } 

    if (currentUser.permissions !== undefined && currentUser.permissions.user_permission_id == 1) {
        return <Navigate to="/" replace />
    }

  return (
      <>
        <Container className='edit-curriculum-body'>
            <Row className='edit-curriculum-hero'>
                <Col>
                    <h3 className='sub-title'>Edit Curriculum</h3>
                    <p className='headline-text'>Turpis est nunc nulla aliquam enim montes, massa at. <br /> Lectus sagittis, diam a arcu, mi aliquam. </p>
                </Col>
                <Col className='hero-item'>
                    <h6>Academic Year</h6>
                    <select className='select-input'>
                        <option>2019/2020</option>
                    </select>
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
