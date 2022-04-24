import React from 'react'
import { FiPlus } from "react-icons/fi";

export const Course = () => {
  return (
    <>
        <div className='grid grid-course-main'>
            <div>
                
            </div>
            <div className='grid grid-courses'>
                <Button onClick={handleShow} > Add Prerequiite </Button>
                <div>
                  <div style={{
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%"
                  }}>
                    <FiPlus />
                  </div>
                </div>
                <AddPrerequisite show={show} handleClose={handleClose} />
            </div>
        </div>
    </>
  )
}
