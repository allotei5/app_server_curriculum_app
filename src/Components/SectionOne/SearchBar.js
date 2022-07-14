import React, { useState, useEffect } from 'react';
import { fetchCourses } from '../../serverRequests';

const SearchBar = ({ getSearchResults }) => {
  const [search, setSearch] = useState('');

  const [ courses, setCourses ] = useState([]);

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
  

  return (
    <input
      className='search-bar'
      key='random1'
      placeholder={'Search for Courses...'}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
