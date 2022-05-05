import { useState, useEffect } from 'react'
import { fetchAcademicYears } from '../../../serverRequests';
import { Semesters } from './Semesters';

export const AcademicYear = ({ curriculum }) => {
    const [ academicYear, setAcademicYear ] = useState([]);

    useEffect(() => {
        const getAcademicYears = async () => {
            const yearsFromServer = await fetchAcademicYears();
            setAcademicYear(yearsFromServer);
            console.log(yearsFromServer)
        }

        getAcademicYears();
    }, [])

  return (
    <>
        {
            academicYear.map((year, index) => (
                <div key={index}>
                    <h3 className='sub-title'>{year.academic_year_name} Year</h3>
                    <div className="curriculum-container">
                        <Semesters curriculum={curriculum} year={year.academic_year_id} />
                    </div>
                </div>
            ))
        }
    </>
  )
}
