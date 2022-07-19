import { useState, useEffect } from 'react';
import './CurriculumCourse.css';
import Select from 'react-select';
import { FiMinus } from 'react-icons/fi';
import { Container, Row, Col } from 'react-bootstrap'
import { fetchCourseTypes, fetchCourses } from '../../../serverRequests';


export const CurriculumCourse = ({ course, removeCourse, updateCourse }) => {
  const [courses, setCourses] = useState([]);
  const [selectCourse, setSelectCourse] = useState({});
  const [courseTypes, setCourseTypes] = useState([]);
  const [selectCourseType, setSelectCourseType] = useState('');

  const updatedCourse = {
    ...course,
  };

  useEffect(() => {
    const getCourses = async () => {
      const coursesFromServer = await fetchCoursesFromServer();
      setCourses(coursesFromServer);
    };

    const getCourseTypes = async () => {
      const courseTypes = await fetchCourseTypes()
      setCourseTypes(courseTypes);
    };

    getCourses();
    getCourseTypes();
  }, []);

  const fetchCoursesFromServer = async () => {
    const data = await fetchCourses();
    const preparedCourses = [];
    data.forEach((course, index) => {
      let preparedCourse = {
        value: course.course_id,
        label: course.course_name,
      };
      preparedCourses.push(preparedCourse);
    });
    // console.log(preparedCourses);
    return preparedCourses;
  };

  return (
    <div>
      <Row className=''>
        <Col>
          <div>
            <div>
              <label className='curriculum-course-label'>Course Name</label>
            </div>
            <Select
              style={{ color: '#515354' }}
              value={
                Object.keys(selectCourse).length === 0
                  ? { label: course.course_name, value: course.course_id }
                  : selectCourse
              }
              options={courses}
              onChange={async (opt) => {
                setSelectCourse({ label: opt.label, value: opt.value });
                updatedCourse.course_id = opt.value;
                await updateCourse(updatedCourse);
              }}
            />
          </div>
        </Col>
        
        <Col>
        
          <div>
            <div>
              <label className='curriculum-course-label'>Course Type</label>
            </div>
            <select
              className='curriculum-course-select'
              onChange={async (e) => {
                setSelectCourseType(e.target.value);
                updatedCourse.course_type = e.target.value;
                await updateCourse(updatedCourse);
              }}
            >
              <option value={course.course_type}>
                {course.course_type_name}
              </option>
              {courseTypes.map((value, index) => (
                <option value={value.course_type_id} key={index}>
                  {value.course_type_name}
                </option>
              ))}
            </select>
          </div>
        </Col>

        <Col>
          <div
            onClick={async () => removeCourse(course.curriculum_detail_id)}
            className='curriculum-remove-course'
          >
            <div
              style={{
                width: '25px',
                height: '25px',
                borderRadius: '50%',
                backgroundColor: '#FF620A',
                color: '#fff',
                cursor: 'pointer',
                float: 'left',
                textAlign: 'center',
              }}
            >
              <FiMinus />
            </div>
            <span
              style={{
                fontSize: '12px',
                paddingLeft: '5px',
              }}
            >
              Remove
            </span>
          </div>
        </Col>

      </Row>
    </div>
  );
};
