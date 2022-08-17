import { useEffect, useState } from 'react'
import { getAllStudents, getStudentCount } from '../../serverRequests';
import { Loading } from '../Loading/Loading';
import { Student } from './Student'
import { Link, useParams, Navigate } from 'react-router-dom';
import './StudentList.css'
import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';


export const StudentList = () => {
    const [ students, setStudents ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ pages, setPages ] = useState([]);
    const params = useParams();

    const { currentUser } = useContext(UserContext);

    useEffect(() => {

        const getStudents = async () => {
            setIsLoading(true);
            const studentsFromServer = await getAllStudents((params.page !== undefined) ? params.page : 1);
            console.log(studentsFromServer);
            setStudents(studentsFromServer);
            setIsLoading(false)
        }

        const countPages = async () => {
            const students = await getStudentCount();
            const pages = Math.round(students/5) + 1;
            const linksToRender = [];
            for (let i = 1; i < pages+1; i++) {
                linksToRender.push(i);
            }
            setPages(linksToRender);
        }

        getStudents();
        countPages();

    }, [params])
    // if (currentUser.permissions === undefined) {
    //     return <Navigate to="/" replace />
    // } 

    // if (currentUser.permissions !== undefined && currentUser.permissions.user_permission_id != 1) {
    //     return <Navigate to="/" replace />
    // }
  return (
    <div className='custom-container'>
        {
            (isLoading) ? <Loading />
            :
            <>
                <div className='student-ctl-grid'>
                    <form className='form-grid'>
                        <input className='form-control' placeholder='Search by first or last name' />
                        <button className='btn btn-primary' id='search'>Search</button>
                    </form>
                    <button className='btn btn-success' id='add-student'>Add New Student</button>
                </div>
                <div className='student-list-grid'>
                    <p>First Name</p>
                    <p>Last Name</p>
                    <p>Email</p>
                    <p>Manage</p>
                </div>
                {
                    students.map((student, index) => (<Student student={student} key={index} />))
                }
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <Link className="page-link" to="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </Link>
                        </li>
                        {
                            pages.map((link, index) => (<li key={index} className="page-item"><Link className="page-link" to={`/students/${link}`}>{link}</Link></li>))
                        } 
                        <li className="page-item">
                            <Link className="page-link" to="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </>
        }

    </div>
  )
}
