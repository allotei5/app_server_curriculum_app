import { useState, useEffect } from 'react'
import { AddCurriculumCourse } from './AddCurriculumCourse'
import { CurriculumCourse } from './CurriculumCourse'
import { useParams } from "react-router-dom";
import { fetchCoursesFromCurriculum } from '../../../serverRequests';

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
    const res = await fetch(`${process.env.REACT_APP_BACKEND_SERVER}actions/curriculum/remove_curriculum_detail.php`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        curriculum_detail_id: id
      })
    });
    const data = await res.json();
    if(data.response === true) {
      setCoursesFromServer(coursesFromServer.filter((value, index) => (value.curriculum_detail_id !== id)))
    }else {
      console.log('error: could not delete');
    }
  }
  const fetchOneCourseForCurriculum = async () => {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_SERVER}actions/curriculum/add_new_course_to_curriculum.php`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        curriculum_id: params.curriculum_id,
        student_level: academicYear,
        semester_id: semester.semester_id
      })
    });
    const data = await res.json();
    console.log(data);
    // console.log(newData);
    return data;
  }

  const addNewCourse = async () => {
    const newCourse = await fetchOneCourseForCurriculum();
    setCoursesFromServer([...coursesFromServer, newCourse]);
  }

  const updateCourse = async (course) => {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_SERVER}actions/curriculum/edit_curriculum_details.php`, {
      method: "PUT",
      body: JSON.stringify({
        ...course
      })
    });
    // console.log(course);
    const data = await res.json();
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
