import React from 'react'
import { CourseTypeAccordion } from './CourseTypeAccordion'

export const AccordionContainer = ({courseTypes}) => {
    // console.log(courseTypes);
  return (
    <>
        {
           courseTypes.map((value, index) => (
            <CourseTypeAccordion key={index} courseType={value}  />
  ))
        }
    </>
  )
}
