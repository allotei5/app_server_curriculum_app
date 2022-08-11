import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import SearchBar from './SearchBar'
import SearchResult from './SearchResult'

const SectionOne = () => {
        
    const [ searchResults, setSearchResults ] = useState([]);

    // old function
    // const getSearchTerm = (courses, results) => {

    //     // getSearchResults(results);
    //     // console.log(courses, results)
    //     if (results.length == 0){
    //         setSearchResults([])
    //     }else {
    //         setSearchResults(courses.filter((value) => {
    //             let pattern = new RegExp(`${results}`);
    //             return pattern.test(value.course_name.toLowerCase())
    //         }))
    //     }

    // }

    // new function 
    const getSearchTerm = (coursesFromDb) => {
        if(coursesFromDb.length === 0) {
            setSearchResults([])
        } else {
            setSearchResults(coursesFromDb)
        }
    }
    
    return (

        <div style={{backgroundColor: "#fafafa"}}>
            <Container className="py-5 px-5 cs-col" style={{display: "grid", justifyContent: "center"}}>
                <Col>
                    <h3 className='cs-fs-3 fw-bolder text-center'>COURSE PREREQUISITE CHECKER</h3>
                    <p className='cs-fs-2 my-4 text-center'>Turpis est nunc nulla aliquam enim montes, massa at. Lectus sagittis, diam a arcu, mi aliquam. In urna posuere sed egestas interdum tristique nunc, semper. </p>     
                </Col>
                <Col>
                    <SearchBar getSearchResults={getSearchTerm} />
                </Col>
                <Col>
                    <SearchResult results={searchResults} />
                </Col>
                
        </Container>
        </div>
       
    )
}

export default SectionOne
