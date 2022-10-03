import { useEffect, useState } from 'react'
import { getAllStudents, getStudentCount, searchStudents } from '../../serverRequests';
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
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ showLinks, setShowLinks ] = useState(true);
    const params = useParams();

    const { currentUser } = useContext(UserContext);
    const getStudents = async () => {
        setIsLoading(true);
        const studentsFromServer = await getAllStudents((params.page !== undefined) ? params.page : 1);
        // console.log(studentsFromServer);
        setStudents(studentsFromServer);
        setIsLoading(false)
    }

    const countPages = async () => {
        const students = await getStudentCount();
        const pages = Math.round(students/20) + 1;
        // console.log('count', students)
        const linksToRender = [];
        for (let i = 1; i < pages+1; i++) {
            linksToRender.push(i);
        }
        setPages(linksToRender);
    }

    useEffect(() => {
        getStudents();
        countPages();

    }, [params])
    // if (currentUser.permissions === undefined) {
    //     return <Navigate to="/" replace />
    // } 

    // if (currentUser.permissions !== undefined && currentUser.permissions.user_permission_id != 1) {
    //     return <Navigate to="/" replace />
    // }

    const searchForStudent = async (e) => {
        e.preventDefault()
        if(searchTerm !== '') {
            const students = await searchStudents(searchTerm);
            setStudents(students)
            setShowLinks(false)
        }
    }

    const clearSearchResults = async (e) => {
        setSearchTerm("")
        getStudents();
        countPages();
        setShowLinks(true);
    }
  return (
    <div className='custom-container'>
        {
            (isLoading) ? <Loading />
            :
            <>
                <div className='student-ctl-grid'>
                    <form className='form-grid' onSubmit={searchForStudent}>
                        <input required className='form-control' placeholder='Search by first or last name' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                        <button className='btn btn-primary'>Search</button>
                        <button className='btn btn-danger' type='button' onClick={() => clearSearchResults()}>Clear</button>
                    </form>
                    {/* <button className='btn btn-success' id='add-student'>Add New Student</button> */}
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
                {
                    showLinks && 
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <Link className="page-link" to="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </Link>
                            </li>
                            {
                                pages.map((link, index) => (<li key={index} className={`page-item ${(params.page == link) ? 'active' : '' }`}><Link className="page-link" to={`/students/${link}`}>{link}</Link></li>))
                            } 
                            <li className="page-item">
                                <Link className="page-link" to="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                }
                
            </>
        }

    </div>
  )
}
