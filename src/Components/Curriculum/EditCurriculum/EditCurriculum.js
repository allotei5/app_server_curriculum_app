import React from 'react'
import { CurriculumYearAccordion } from './CurriculumYearAccordion'
import './EditCurriculum.css'

export const EditCurriculum = () => {

  return (
      <>
        <div className='edit-curriculum-body'>
            <div className='edit-curriculum-hero'>
                <div>
                    <h3 className='sub-title'>Edit Curriculum</h3>
                    <p className='headline-text'>Turpis est nunc nulla aliquam enim montes, massa at. <br /> Lectus sagittis, diam a arcu, mi aliquam. </p>
                </div>
                <div className='hero-item'>
                    <h6>Academic Year</h6>
                    <select className='select-input'>
                        <option>2019/2020</option>
                    </select>
                </div>
            </div>
        </div>
        <div className='edit-curriculum'>
            <CurriculumYearAccordion />
        </div>
    </>
  )
}
