import { FiPlus } from "react-icons/fi";

export const AddCurriculumCourse = ({ addNewCourse }) => {
  return (
    <>
        <div onClick={async () => addNewCourse()}>
                <div style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    backgroundColor: "#0A7AFF",
                    color: "#fff",
                    cursor: "pointer",
                    float: "left",
                    textAlign: "center"
                }}>
                    <FiPlus />
                </div>
                <span style={{
                    fontSize: "12px",
                    paddingLeft: "5px"
                }}>
                    Add
                </span>
            </div>
    </>
  )
}
