import { Accordion } from 'react-bootstrap'

export const CurriculumYearAccordion = () => {
  return (
    <>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
                <Accordion.Header>Freshman Year</Accordion.Header>
                <Accordion.Body>
                    Semesters
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </>
  )
}
