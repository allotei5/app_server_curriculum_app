import { useState, useContext, useEffect } from "react"
import { GradeContext } from "../../Context/GradeContext";
import { TrackerContext } from "../../Context/TrackerContext";
import { UserContext } from '../../Context/UserContext';

import { updateCourseInTracker } from "../../serverRequests";

export const CourseInTracker = ({ course }) => {

  const { grades } = useContext(GradeContext);
  const { courses, setCourses } = useContext(TrackerContext);
  const { currentUser } = useContext(UserContext);

  const [ completedState, setCompletedState ] = useState((course.completed == 1) ? true : false);
  const [ selectGrade, setSelectGrade ] = useState("");
  
  // setTasks(tasks.map(prevState => prevState.id === data.id ? data : prevState));


  const onCompletedChange = async () => {
    setCompletedState(!completedState);
    if(completedState) {
      // this trigger means uncompleted
      course.completed = "0";
      if(currentUser !== null && currentUser.student_details !== undefined) {
        const updateCourse = await updateCourseInTracker(course);
        if(updateCourse.response) {
          console.log("worked");
        } else {
          console.log("something went wrong");
        }
      }
      

    } else {
      // this trigger means completed this is largely due to the async nature of useState
      course.completed = "1";

    }

    // set state
    // loop through courses in state and update only the course in question
    setCourses(courses.map(prevState => prevState.curriculum_tracker_id === course.curriculum_tracker_id ? course : prevState));
    

  }

  const onGradeSelectChange = async (gradeId) => {
    course.grade_id = gradeId;
    setCourses(courses.map(prevState => prevState.curriculum_tracker_id === course.curriculum_tracker_id ? course : prevState));
    if(currentUser !== null && currentUser.student_details !== undefined) {
      const updateCourse = await updateCourseInTracker(course);
      if(updateCourse.response) {
        console.log("worked");
      } else {
        console.log("something went wrong");
      }
    }
    
  }

  // console.log(course);

  return (
    <>
      <div className="course-tracker-courses">
          <div className="">
              <p className="headline-text">{course.course_name}</p>
          </div>
          <div className="">
            <h3 className="headline-text ">Credits: {course.course_unit}</h3>
          </div>
          <div className="courses">
            <label className="checkbox-label">
                <input type="checkbox" checked={completedState} onChange={e => onCompletedChange()} />
                <span className="checkbox-custom"></span>
                Completed
            </label>
          </div>
          <div>
            {
              (completedState == 1) 
              ? (<select className="select-input" onChange={ e => onGradeSelectChange(e.target.value) }>
                    {
                      (course.grade_id) ? grades.filter((grade) => (grade.grade_id === course.grade_id)).map((grade) => (<option value={grade.grade_id}>{grade.grade_letter}</option>))
                      :<option defaultValue>Grades</option>
                    }
                    {
                      grades.map((grade) => (<option key={grade.grade_id} value={grade.grade_id}>{grade.grade_letter}</option>))
                    }
                  </select>)
            : ""
            }
          </div>
          
      </div>
    </>
  )
}
