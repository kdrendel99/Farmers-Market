import React from "react";
import PropTypes from "prop-types";

function Month(props){
  return (
    <React.Fragment>
    <h3>{props.name}</h3>
    <h4>{props.selection}</h4>
    </React.Fragment>
  );
}

Month.propTypes = {
  name: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired,
};

export default Month;