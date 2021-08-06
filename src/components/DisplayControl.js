import React from "react";
import MonthList from "./MonthList";
import DayList from "./DayList";

class DisplayControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      monthsVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      monthsVisibleOnPage: !prevState.monthsVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.monthsVisibleOnPage) {
      currentlyVisibleState = <MonthList />
      buttonText = "Return to day list";
    } else {
      currentlyVisibleState = <DayList />
      buttonText = "View monthly produce options";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default DisplayControl;