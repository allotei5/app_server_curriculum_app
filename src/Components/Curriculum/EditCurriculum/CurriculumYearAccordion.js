import { Accordion } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { CurriculumSemester } from './CurriculumSemester';
import { Container, Row, Col } from 'react-bootstrap'

export const CurriculumYearAccordion = ({year}) => {
    const [ semesters, setSemesters ] = useState([]);

    useEffect(() => {
        const getSemesters = async () => {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_SERVER}actions/curriculum/fetch_semesters.php`);
            const data = await res.json();
            setSemesters(data);
        }

        getSemesters();
    }, [])

  return (
    <>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
                <Accordion.Header>{year.academic_year_name} Year</Accordion.Header>
                <Accordion.Body>
                    {
                        semesters.map((semester, index) => (
                            <CurriculumSemester key={index} academicYear={year.academic_year_id} semester={semester} />
                        ))
                    }
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </>
  )
}
