import React from 'react'
import { CourseTypeAccordion } from './CourseTypeAccordion'

export const AccordionContainer = ({departments}) => {
    // console.log(courseTypes);
    // hi
  return (
    <>
        {
           departments.map((value, index) => (
            <CourseTypeAccordion key={index} newKey={index} department={value}  />
  ))
        }
    </>
  )
}
