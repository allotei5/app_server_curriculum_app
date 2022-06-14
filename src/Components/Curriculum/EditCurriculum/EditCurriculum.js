import { useContext } from 'react';
import { useState, useEffect } from 'react'
import { UserContext } from '../../../Context/UserContext';
import { CurriculumYearAccordion } from './CurriculumYearAccordion'
import './EditCurriculum.css'
import { Navigate } from 'react-router-dom';

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
        console.log(data);
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
        <div className='edit-curriculum-body'>
            <div className='edit-curriculum-hero'>
                <div>
                    <h3 className='sub-title'>Edit Curriculum</h3>
                    <p className='headline-text'>Turpis est nunc nulla aliquam enim montes, massa at. <br /> Lectus sagittis, diam a arcu, mi aliquam. </p>
                </div>
                <div className='hero-item'>
                    <h6>Academic Year</h6>
                    <select className='select-input'>
                        <option>2019/2020</option>
                    </select>
                </div>
            </div>
        </div>
        <div className='edit-curriculum'>
            {
                academicYears.map((year, index) => (
                    <CurriculumYearAccordion key={index} year={year} />
                ))
            }
        </div>
    </>
  )
}
