import React, { Component } from "react";

import FlipCountdown from "@rumess/react-flip-countdown";
import ImageCard from "components/ImageCard";

class Counter extends Component {
  render() {
    return (
      <FlipCountdown
        hideYear
        // hideMonth
        titlePosition='bottom'
        monthTitle="Months"
        dayTitle="Days"
        hourTitle="Hours"
        minuteTitle="Minutes"
        secondTitle="Seconds"
        endAt="2021-09-11 12:30:00" // Date/Time
      />
    );
  }
}


export default Counter;
