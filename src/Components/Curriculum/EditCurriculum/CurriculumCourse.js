import { useState, useEffect } from 'react';
import './CurriculumCourse.css';
import Select from 'react-select';
import { FiMinus } from 'react-icons/fi';
import { Container, Row, Col } from 'react-bootstrap'


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
      const coursesFromServer = await fetchCourses();
      setCourses(coursesFromServer);
    };

    const getCourseTypes = async () => {
      const courseTypes = await fetchCourseTypes();
      setCourseTypes(courseTypes);
    };

    getCourses();
    getCourseTypes();
  }, []);

  const fetchCourses = async () => {
    const res = await fetch(
      'http://localhost/app_server_curriculum_app/server/actions/courses/get_all_courses.php'
    );
    const data = await res.json();
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

  const fetchCourseTypes = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_SERVER}actions/curriculum/fetch_course_type.php`
    );
    const data = await res.json();
    return data;
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
                console.log(updatedCourse);
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
