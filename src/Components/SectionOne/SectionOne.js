import { useState } from 'react'
import SearchBar from './SearchBar'
import SearchResult from './SearchResult'

const SectionOne = () => {
        
    const [ searchResults, setSearchResults ] = useState([]);

    const getSearchTerm = (courses, results) => {

        // getSearchResults(results);
        // console.log(courses, results)
        if (results.length == 0){
            setSearchResults([])
        }else {
            setSearchResults(courses.filter((value) => {
                let pattern = new RegExp(`${results}`);
                return pattern.test(value.course_name.toLowerCase())
            }))
        }

    }
    
    return (
        <div className='section-one' >
            <h3 className='sub-title'>COURSE PREREQUISITE CHECKER</h3>
            <p className='headline-text'>Turpis est nunc nulla aliquam enim montes, massa at. Lectus sagittis, diam a arcu, mi aliquam. In urna posuere sed egestas interdum tristique nunc, semper. </p>
            
            <SearchBar getSearchResults={getSearchTerm} />
            <SearchResult results={searchResults} />


        </div>
       
    )
}

export default SectionOne
