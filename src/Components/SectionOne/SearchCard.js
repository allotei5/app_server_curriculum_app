import React from 'react'
import './SearchCard.css';

export const SearchCard = () => {
  return (
    <div>
        <div className="search_card" style={{marginBottom:"10px"}}>
        <div className="w-row">
        <div className="w-col w-col-9 w-col-stack">
            <h3 className="search_head">Calculus 1</h3>
            <h4 className="heading-2 credit">Credits: 1</h4>
        </div>
        <div className="w-col w-col-3 w-col-stack">
            <div className="search_passmark_box">
            <div className="inside_grade">
                <h4 className="pass_mar">pass grade</h4>
                <h3 className="search_grade">:<span className="text-span-2">D+</span></h3>
            </div>
            </div>
        </div>
        </div>
        <div className="search_credit"></div>
        <div className="search_prerequisit">
            <h4 className="heading-2 prereq">Prerequisites</h4>
        </div>
        {/* ${(course.prerequisites.length!==0) ? prerequisiteComponent(course.prerequisites) : "There are no prerequisites for this course"} */}
    </div>
    </div>
  )
}
