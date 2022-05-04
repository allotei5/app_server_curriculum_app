import React from 'react'

export const YearGroup = () => {
  return (
    <div key={index} className='year-group'>
        <p className='headline-text'>
            4 year curriculum for Management Information Systems 2021
        </p>
        <Link to={`${value.curriculum_id}`} className='year-group-edit'>
            <FiEdit2 />
        </Link>
    </div>
  )
}
