import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-scroll'
const MoreInfoButton = props => {
  return (
    <Link to={props.to} smooth offset={-50} className={`more-link ${props.className}`}>
      {props.text}
      <FontAwesomeIcon
        icon={["fas", "long-arrow-alt-right"]}
        className="icon"
      />
    </Link>
  );
};

export default MoreInfoButton;
