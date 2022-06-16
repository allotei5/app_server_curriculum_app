import { useContext } from 'react';
import { FaUserAlt, FaEye } from 'react-icons/fa';
import { UserContext } from '../../Context/UserContext';
import './StudentList.css';
import { Link } from 'react-router-dom'

export const Student = ({ student }) => {
  
  
  return (
    <div className='student-grid'>
      <p>
        <Link to={`/course-tracker/${student.user_id}`}>
          <FaEye />
        </Link>{' '}
        {student.user_fname}
      </p>
      <p>{student.user_lname}</p>
      <p>{student.user_email}</p>
      <button type='button'>
        <FaUserAlt />
      </button>
    </div>
  );
};
