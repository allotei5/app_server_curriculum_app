import { useState, useEffect } from 'react'
import Select from 'react-select'
import { fetchCurriculums } from '../../../serverRequests';
import { AcademicYear } from './AcademicYear';

export const ViewCurriculum = () => {

    const [ curriculum, setCurriculum ] = useState([]);
    const [ chosenCurriculum, setChosenCurriculum ] = useState("");

    useEffect(() => {
        const getCurriculums = async () => {
            const curriculumFromServer = await fetchCurriculums();
            console.log(curriculumFromServer);
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
        <div className="course-tracker-page">
            <div className="course-tracker-grid curriculum-grid">
                <div>
                    <h3 className='sub-title'>praesent auctor nulla nec fusce.</h3>
                    <p className='headline-text'>Turpis est nunc nulla aliquam enim montes, massa at. Lectus sagittis, diam a arcu, mi aliquam. In urna posuere sed egestas interdum tristique nunc, semper. Convallis pretium tempus in neque lobortis.</p>
                </div>
                <Select options={curriculum} onChange={opt => setChosenCurriculum(opt.value)} /> 
            </div>
            <div className="custom-container">
                {
                    (chosenCurriculum === "") ? <p>Please choose a year group</p>
                    :<AcademicYear curriculum={chosenCurriculum} />
                
                }
            </div>

        </div>
</div>
  )
}
