import React from "react";
import { Link } from "react-router-dom";

const Button = ({ButtonSrc, ButtonName, ButtonStyle}) => {
  return (
    // remomber to do css for primary button and secondary button
      <Link className={ButtonStyle} to={ButtonSrc}>{ButtonName}</Link>
  );
}

export default Button;
