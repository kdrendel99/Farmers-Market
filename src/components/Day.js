import React from "react";
import PropTypes from "prop-types";

function Day(props){
  return (
    <React.Fragment>
    <h3>{props.name}</h3>
    <h4>{props.location}</h4>
    <p>{props.hours}</p>
    <p>{props.booth}</p>
    </React.Fragment>
  );
}

Day.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string,
  booth: PropTypes.string.isRequired
};

export default Day;