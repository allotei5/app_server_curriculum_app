import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    // remomber to do css for primary button and secondary button
      <Link className="primary-button" to={props.ButtonSrc}>{props.ButtonName}</Link>
  );
}

export default Button;
