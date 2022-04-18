import { useState } from 'react';
import { Accordion, Button } from 'react-bootstrap'
import { AddPrerequisite } from './AddPrerequisite';

export const EditPrerequisites = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className="edit-prerequisite-page">
        <h3 className='headline-title'>
            praesent auctor nulla nec fusce.
        </h3>
        <p>Turpis est nunc nulla aliquam enim montes, massa at. Lectus sagittis, diam a arcu, mi aliquam. </p>
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
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        
    </div>
  )
}
