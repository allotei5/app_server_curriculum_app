import { useState, useEffect } from 'react'
import Select from 'react-select'
import { fetchCurriculums } from '../../../serverRequests';
import { AcademicYear } from './AcademicYear';
import { Container, Row, Col } from 'react-bootstrap';

export const ViewCurriculum = () => {

    const [ curriculum, setCurriculum ] = useState([]);
    const [ chosenCurriculum, setChosenCurriculum ] = useState("");

    useEffect(() => {
        const getCurriculums = async () => {
            const curriculumFromServer = await fetchCurriculums();
            const preppedCurriculum = [];
            curriculumFromServer.forEach((value, index) => {
                preppedCurriculum.push({
                    value: value.curriculum_id,
                    label: value.major_code +" " + value.year_group_name
                })
            })
            setCurriculum(preppedCurriculum);

        }

        getCurriculums();
    }, [])
    
  return (
    <div>
        <Container className="">
            <Row>
                <Col md={9}>
                    <div>
                        <h3 className='cs-fs-3 fw-bold'>praesent auctor nulla nec fusce.</h3>
                        <p className='cs-fs-2 my-4'>Turpis est nunc nulla aliquam enim montes, massa at. Lectus sagittis, diam a arcu, mi aliquam. In urna posuere sed egestas interdum tristique nunc, semper. Convallis pretium tempus in neque lobortis.</p>
                    </div>
                </Col>
                <Col>   
                    <p>Please choose a year group</p>
                    <Select options={curriculum} onChange={opt => setChosenCurriculum(opt.value)} /> 
                </Col>
            </Row>
            <Row>
                {
                    (chosenCurriculum !== "") && <AcademicYear curriculum={chosenCurriculum} />
                }
            </Row>

        </Container>
</div>
  )
}
