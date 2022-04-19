import React from 'react'
// hi

export const Course = () => {
  return (
    <>
        <div className='grid grid-course-main'>
            <div>
                
            </div>
            <div className='grid grid-courses'>
                <Button onClick={handleShow} > Add Prerequisite </Button>
                <AddPrerequisite show={show} handleClose={handleClose} />
            </div>
        </div>
    </>
  )
}
