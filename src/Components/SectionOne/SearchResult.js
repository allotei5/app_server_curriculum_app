import { useState,useEffect } from 'react';
import search_image from "../../Images/search_image.svg";
import { SearchCard } from './SearchCard';


const SearchResult = ({results}) =>{    
    // console.log(results)
    //  useEffect()
     
    return (
        <div>
            {(results.length != 0) ? <SearchCard courses={results} /> : <div style={{display: "grid", justifyContent: "center"}}><img src={search_image} alt="search illustration"/></div> }
        </div>
    )
}

export default SearchResult
