import React from "react";
import ashesi_logo from "../../Images/ashesi_logo.png";

function CurriculumHomeCard(props) {
  return (
    <div style={{textAlign: "right", border: "#000 1px solid", borderRadius: "10px", padding: "15px"}}>
      <img className="logo" src={ashesi_logo} alt="logo" />
      <h4>{props.Heading}</h4>
    </div>
  );
}

export default CurriculumHomeCard;
