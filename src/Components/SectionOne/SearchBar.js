import React, { useState, useEffect } from 'react';
import { fetchCourses, fetchCoursesByName } from '../../serverRequests';
import Button from '../Button';

const SearchBar = ({ getSearchResults }) => {
  const [search, setSearch] = useState('');

  const [ courses, setCourses ] = useState([]);

     useEffect(() => {
        const getCourses = async () => {
            const coursesFromServer = await fetchCourses();
            setCourses(coursesFromServer);
        }

        // getCourses();
    }, []);

    // useEffect(() => {
    //   getSearchResults(courses, search);
    // }, [search])

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const results = await fetchCoursesByName(search);
        getSearchResults(results);
      } catch (error) {
        console.log(error)
      }
    }
  

  return (
    <form onSubmit={e => handleSubmit(e)} className='mb-5'>
      <div>
        <input
          className='search-bar'
          key='random1'
          placeholder={'Search for Courses...'}
          onChange={(e) => setSearch(e.target.value)}
          required
        />
      </div>
      <button type='submit' className='button primary-button' style={{border: 'none', width:"100%"}}> Search </button>
    </form>
  );
};

export default SearchBar;
