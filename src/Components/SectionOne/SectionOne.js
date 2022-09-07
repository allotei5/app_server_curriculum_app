import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import SearchBar from './SearchBar'
import SearchResult from './SearchResult'

const SectionOne = () => {
        
    const [ searchResults, setSearchResults ] = useState([]);
    const [ isEmpty, setIsEmpty ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);

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
        setIsEmpty(false)
        if(coursesFromDb.length === 0) {
            setSearchResults([])
            setIsEmpty(true)
        } else {
            setSearchResults(coursesFromDb)
        }
    }
    
    return (

        <div style={{backgroundColor: "#fafafa"}}>
            <Container className="py-5 px-5 cs-col" style={{display: "grid", justifyContent: "center"}}>
                <Col>
                    <h3 className='cs-fs-3 fw-bolder text-center'>COURSE PREREQUISITE CHECKER</h3>
                    <p className='cs-fs-2 my-4 text-center'>Use this tool to identify which courses you need to take as prerequisites before taking a course. Use the search bar below to look up a course and its prerequisites </p>     
                </Col>
                <Col>
                    <SearchBar setIsLoading={setIsLoading} getSearchResults={getSearchTerm} setSearchResults={setSearchResults} setIsEmpty={setIsEmpty} />
                </Col>
                <Col>
                    <SearchResult isEmpty={isEmpty} isLoading={isLoading} results={searchResults} />
                </Col>
                
        </Container>
        </div>
       
    )
}

export default SectionOne
