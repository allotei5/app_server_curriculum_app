import React, {useState} from 'react'
import { FiMinus } from "react-icons/fi";

export const CourseButton = ({course, removePrerequisite}) => {
    const [ editState, setEditState] = useState(false);
    const [ styleEditState, setStyleEditState] = useState({});
    const [ minusButtonState, setMinusButtonState ] = useState({display: "none"});

    const nonEdit = {
        backgroundColor: "#8BAAAD",
        fontSize: "12px",
        color: "#fff",
        borderRadius: "15px",
        textAlign: "center",
        padding: "10px 10px",
        cursor: "pointer",
    }


    const edit = {
        backgroundColor: "#fff",
        fontSize: "12px",
        color: "#8BAAAD",
        border: "#8BAAAD 1px solid",
        borderRadius: "15px",
        textAlign: "center",
        padding: "10px",
        cursor: "pointer"
    }

    const minusButtonCSS = {
        backgroundColor: "#FF620A",
        color: "#fff",
        borderRadius: "50%",
        textAlign: "center",
        width: "25px",
        height: "25px",
        marginLeft: "auto",
        marginRight: "0",
        marginBottom: "-10px",
        zIndex: "10",
        position: "relative",
        cursor: "pointer",
    }

    const minusButtonNone = {
        display: "none"
    }

    const changeState = () => {
        setEditState(!editState);
        if(editState) {
            setStyleEditState(nonEdit);
            setMinusButtonState(minusButtonNone);
        }else {
            setStyleEditState(edit);
            setMinusButtonState(minusButtonCSS);
        }
    }

  return (
    <div >
        <div>
            <div className="" onClick={() => removePrerequisite(course.pre_requisite_id)} style={minusButtonState} >
                <FiMinus />
            </div>
        </div>
        <div style={styleEditState} className='prerequisite-button' onClick={() => changeState()}>{course.course_name}</div>
    </div>
  )
}
