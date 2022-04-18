import React from 'react'
import SearchBar from './SearchBar'
import SearchResult from './SearchResult'

function SectionOne() {
    return (
        <div className='section-one' >
            <h3 className='sub-title'>COURSE PREREQUISITE CHECKER</h3>
            <p className='headline-text'>Turpis est nunc nulla aliquam enim montes, massa at. Lectus sagittis, diam a arcu, mi aliquam. In urna posuere sed egestas interdum tristique nunc, semper. </p>
            
            <SearchBar/>
            <SearchResult/>


        </div>
       
    )
}

export default SectionOne
