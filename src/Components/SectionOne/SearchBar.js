import React, { useState, useEffect } from 'react';

const SearchBar = ({ getSearchResults }) => {
  const [search, setSearch] = useState('');

  const [ courses, setCourses ] = useState([]);
    //  const [searchedCourses, setSearchedCourses ] = useState([]);

     useEffect(() => {
        const getCourses = async () => {
            const coursesFromServer = await fetchCourses();
            setCourses(coursesFromServer);
        }

        getCourses();
    }, []);

    useEffect(() => {
      getSearchResults(courses, search);
    }, [search])
    
    const fetchCourses = async () => {
        const res = await fetch("http://localhost/app_server_curriculum_app/server/actions/courses/get_all_courses.php");
        const data = await res.json();
        console.log(data);
        return data;
    }
  

  const BarStyling = {
    width: '40rem',
    background: '#fff',
    border: 'none',
    padding: '1rem',
    borderRadius: '10px',
    marginBottom: '20px'
    
  };

  return (
    <input
      style={BarStyling}
      key='random1'
      placeholder={'search for Courses...'}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
