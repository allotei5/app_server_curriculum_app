import { useState,useEffect } from 'react';
import search_image from "../../Images/search_image.svg";
import { Loading } from '../Loading/Loading';
import { SearchCard } from './SearchCard';
import NotFoundIllustration from '../../Images/page_not_found.svg'



const SearchResult = ({ results, isLoading, isEmpty }) =>{    
    // console.log(results)
    //  useEffect()
     
    return (
        <div>
            { isLoading && <Loading /> }

            { isEmpty && 
                <div className='text-center'>
                    <img src={NotFoundIllustration} width="70%" alt="courses not found" />
                    <p>No courses found by that name</p>
                </div>
            }

            {
                results.length > 0 && <SearchCard courses={results} />
            }

            {/* {(results.length != 0) ? <SearchCard courses={results} /> : <div style={{display: "grid", justifyContent: "center"}}><img src={search_image} alt="search illustration"/></div> } */}
        </div>
    )
}

export default SearchResult
