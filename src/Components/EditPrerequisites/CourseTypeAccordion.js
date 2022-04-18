import React from 'react'

export const CourseTypeAccordion = ({ courseType, courses }) => {
  return (
    <>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                    <div className='grid grid-course-main'>
                        <div>
                            Quantum Computing
                        </div>
                        <div className='grid grid-courses'>
                            <Button onClick={handleShow} > Add Prerequisite </Button>
                            <AddPrerequisite show={show} handleClose={handleClose} />
                        </div>
                    </div>
                    <hr />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </>
  )
}
