import { useState, useEffect } from 'react'
import { fetchAcademicYears } from '../../../serverRequests';
import { Loading } from '../../Loading/Loading';
import { Semesters } from './Semesters';

export const AcademicYear = ({ curriculum }) => {
    const [ academicYear, setAcademicYear ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const getAcademicYears = async () => {
            const yearsFromServer = await fetchAcademicYears();
            setAcademicYear(yearsFromServer);
            setLoading(false);
        }

        getAcademicYears();
    }, [])

  return (
    <>
        {
            (!loading) ?
            academicYear.map((year, index) => (
                <div key={index}>
                    <h3 className='sub-title' style={{margin: "30px 0 10px 0"}}>{year.academic_year_name} Year</h3>
                    <div className="curriculum-container">
                        <Semesters curriculum={curriculum} year={year.academic_year_id} />
                    </div>
                </div>
            ))
            : <Loading />
        }
    </>
  )
}
