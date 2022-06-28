import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { FaUserAlt, FaEye, FaEdit } from 'react-icons/fa';
import { UserContext } from '../../Context/UserContext';
import './StudentList.css';
import { Link } from 'react-router-dom'
import { ProfileModal } from '../Profile/ProfileModal';
import { StudentProfileModal } from './StudentProfileModal';

export const Student = ({ student }) => {
  const [ show, setShow ] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  
  return (
    <div className='student-grid'>
      <p>
        {student.user_fname}
      </p>
      <p>{student.user_lname}</p>
      <p>{student.user_email}</p>
      <div>
        {
          (student.student_id === null && student.student_major === null && student.student_year_group === null)
          ?<div>
            <button type='button' style={{marginRight: "10px"}} onClick={ () => handleShow() }>
              <FaUserAlt />
            </button>
          </div>:
          <div>
            <Link to={`/course-tracker/${student.user_id}`} style={{marginRight: "10px"}}>
              <FaEye />
            </Link>
            <button style={{marginRight: "10px"}} onClick={ () => handleShow() }>
              <FaEdit />
            </button>

          </div>
        }
      </div>
      <StudentProfileModal show={show} handleClose={handleClose} student={student} />

    </div>
  );
};
