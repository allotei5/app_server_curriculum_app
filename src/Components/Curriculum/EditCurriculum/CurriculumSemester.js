import { useState, useEffect } from 'react'
import { AddCurriculumCourse } from './AddCurriculumCourse'
import { CurriculumCourse } from './CurriculumCourse'
import { useParams } from "react-router-dom";
import { fetchCoursesFromCurriculum, fetchOneCourseForCurriculumFromServer, removeCourseFromCurriculum, updateCourseInCurriculum } from '../../../serverRequests';

export const CurriculumSemester = ({semester, academicYear}) => {

  const [ coursesFromServer, setCoursesFromServer ] = useState([]);
  const [ courseForCurriculum, setCourseForCurriculum ] = useState({});
  const params = useParams();

  useEffect(() => {
    const getCourses = async () => {
      const courses = await fetchCoursesFromCurriculum(params.curriculum_id, semester.semester_id, academicYear);
      setCoursesFromServer(courses);
    }

    getCourses();
  }, []);

  const removeCourse = async (id) => {
    const data = await removeCourseFromCurriculum(id);
    if(data.response === true) {
      setCoursesFromServer(coursesFromServer.filter((value, index) => (value.curriculum_detail_id !== id)))
    }else {
      console.log('error: could not delete');
    }
  }

  const fetchOneCourseForCurriculum = async () => {
    // console.log("error is herea")

    const data = await fetchOneCourseForCurriculumFromServer(params.curriculum_id, academicYear, semester.semester_id);
    return data;
  }

  const addNewCourse = async () => {
    const newCourse = await fetchOneCourseForCurriculum();
    setCoursesFromServer([...coursesFromServer, newCourse]);
  }

  const updateCourse = async (course) => {
    const data = await updateCourseInCurriculum(course);
    setCoursesFromServer(coursesFromServer.map(prevState => prevState.curriculum_detail_id === data.curriculum_detail_id ? data : prevState))
  }

  return (
    <div style={{marginBottom: "20px"}}>
        <h6>{semester.semester_name}</h6>
        {
          coursesFromServer.map((value, index) => (
            <CurriculumCourse key={index} course={value} removeCourse={removeCourse} updateCourse={updateCourse} />
          ))
        }
        
        <AddCurriculumCourse addNewCourse={addNewCourse} />
    </div>
  )
}
