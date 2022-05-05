import { useState, useEffect } from 'react'
import { fetchSemesters } from '../../../serverRequests';
import { Courses } from './Courses';

export const Semesters = ({ curriculum, year }) => {
  const [ semesters, setSemesters ] = useState([]);

  useEffect(() => {
    const getSemesters = async () => {
      const semestersFromServer = await fetchSemesters();
      setSemesters(semestersFromServer);
    }

    getSemesters();
  }, [])
  return (
    <>
      {
        semesters.map((semester, index) => (
          <div key={index}>
            <p>{semester.semester_name}</p>
            <Courses curriculum={curriculum} year={year} semester={semester.semester_id} />
          </div>
        ))
      }
        
    </>
  )
}
