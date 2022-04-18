import React, {useState,useEffect} from 'react';
import search_image from "../../Images/search_image.svg";


const SearchResult=() =>{
     const[isResult,setIsResult]= useState(false);

     

    //  useEffect()
     
    return (
        <div>
            {isResult && <div>card goes here</div>}
            {!isResult && <div><img src={search_image} alt="search illustration"/></div>}
        </div>
    )
}

export default SearchResult
