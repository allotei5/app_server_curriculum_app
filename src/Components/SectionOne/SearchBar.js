import React, { useState, useEffect } from 'react';
import { fetchCourses, fetchCoursesByName } from '../../serverRequests';
import Button from '../Button';

const SearchBar = ({ getSearchResults, setIsLoading, setSearchResults, setIsEmpty }) => {
  const [search, setSearch] = useState('');

  const [ courses, setCourses ] = useState([]);

  const [ clear, setClear ] = useState(false);

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
        setIsLoading(true)
        const results = await fetchCoursesByName(search);
        getSearchResults(results);
        setIsLoading(false)
        setClear(true)
      } catch (error) {
        // console.log(error)
      }
    }

    const clearResults = () => {
      setSearchResults([])
      setSearch("")
      setClear(false)
      setIsEmpty(false)
    }
  

  return (
    <form onSubmit={e => handleSubmit(e)} className='mb-5'>
      <div>
        <input
          value={search}
          className='search-bar'
          key='random1'
          placeholder={'Search for Courses...'}
          onChange={(e) => setSearch(e.target.value)}
          required
        />
      </div>
      <button type='submit' className='button primary-button' style={{border: 'none', width:"100%"}}> Search </button>
      {
        clear && <button type='button' className='button secondary-button mt-3' style={{width:"100%"}} onClick={() => clearResults()}> Clear </button>
      }
    </form>
  );
};

export default SearchBar;
