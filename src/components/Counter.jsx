import React, { Component } from "react";

import FlipCountdown from "@rumess/react-flip-countdown";
import ImageCard from "components/ImageCard";

class Counter extends Component {
  render() {
    const size = (window.innerWidth > "1199") ? "medium" : "small";
    return (
      <FlipCountdown
        hideYear
        // hideMonth

        titlePosition='bottom'
        monthTitle="Miesiące"
        dayTitle="Dni"
        hourTitle="Godzin"
        minuteTitle="Minut"
        secondTitle="Sekund"
        size={size}
        endAt="2021-09-11 12:30:00" // Date/Time
      />
    );
  }
}


export default Counter;
