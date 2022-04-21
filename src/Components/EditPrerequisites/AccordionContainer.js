import React from 'react'
import { CourseTypeAccordion } from './CourseTypeAccordion'

export const AccordionContainer = ({courseTypes}) => {
    // console.log(courseTypes);
    // hi
  return (
    <>
        {
           courseTypes.map((value, index) => (
            <CourseTypeAccordion key={index} newKey={index} courseType={value}  />
  ))
        }
    </>
  )
}
