import { useState, useEffect } from 'react'
import { fetchAcademicYears } from '../../../serverRequests';
import { Loading } from '../../Loading/Loading';
import { Semesters } from './Semesters';
import Container from 'react-bootstrap/esm/Container';

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
    <Container className='mt-3'>
        {
            (!loading) ?
            academicYear.map((year, index) => (
                <div style={{border: "1px solid black", borderRadius: "10px"}} key={index} className='mb-3 px-3'>
                    <h3 className='cs-fs-3 f2-bold mt-3 mb-2'>{year.academic_year_name} Year</h3>
                    <Container>
                        <Semesters curriculum={curriculum} year={year.academic_year_id} />
                    </Container>
                </div>
            ))
            : <Loading />
        }
    </Container>
  )
}
