import { Box } from "@chakra-ui/core";
import React from "react";

const bulanFormat = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
};

export default class YourTime extends React.Component {
    constructor() {
        super();

        this.state = {
            tahun: new Date().getFullYear(),
            bulan: bulanFormat[new Date().getMonth() + 1],
            tanggal: (new Date().getDate().toString().length === 1 ? `0${new Date().getDate()}` : new Date().getDate()).toString(),
            jam: (new Date().getHours().toString().length === 1 ? `0${new Date().getHours()}` : new Date().getHours()),
            menit: (new Date().getMinutes().toString().length === 1 ? `0${new Date().getMinutes()}` : new Date().getMinutes()),
            detik: (new Date().getSeconds().toString().length === 1 ? `0${new Date().getSeconds()}` : new Date().getSeconds())
        };
    }

    render() {
    const titleCountdown = document.getElementById("title");
    const daysCountdown = document.getElementById('days');
    const hoursCountdown = document.getElementById('#hours');
    const minutesCountdown = document.getElementById('minutes');
    const secondsCountdown = document.getElementById('seconds');
  
    const currentTime = new Date();
    let yearOfTheEvent = currentTime.getFullYear();
    let eventDate = new Date(yearOfTheEvent,3,24);
    const isItMarch24 = currentTime.getMonth() === 3 && currentTime.getDate() === 24;
  
  
    function countdown() {
      const now = new Date();
  
      if ( now > eventDate ) {
        eventDate = new Date( yearOfTheEvent + 1, 3, 24 );
      } else if ( now.getFullYear() === eventDate.getFullYear() + 1 ) {
        eventDate = new Date( now.getFullYear(), 3, 24 );
      }
  
      const currentTime = now.getTime();
      const eventTime = eventDate.getTime();
      const remainingTime = eventTime - currentTime;
  
  
      let seconds = Math.floor( remainingTime / 1000 );
      let minutes = Math.floor( seconds / 60 );
      let hours =  Math.floor( minutes / 60 );
      let days = Math.floor( hours / 24 );
  
      hours %= 24;
      minutes %= 60;
      seconds %= 60;
  
      if ( isItMarch24 ) {
        console.log('Happy birthday, Hanif!');
        daysCountdown.remove();
        hoursCountdown.remove();
        minutesCountdown.remove();
        secondsCountdown.remove();
        titleCountdown.remove();
        document.querySelector("#message").innerHTML = "Today is my birthday, happy birthday!!";
      } else {

        daysCountdown.innerHTML = days;
        hoursCountdown.innerHTML = hours;
        minutesCountdown.innerHTML = minutes;
        secondsCountdown.innerHTML = seconds;

      } // end of if ( isItMarch24 )
  
    } // end of countdown
  
        setInterval(() => {
            countdown();
            // Current live time
            this.setState({
            tahun: new Date().getFullYear(),
            bulan: bulanFormat[new Date().getMonth() + 1],
            tanggal: (new Date().getDate().toString().length === 1 ? `0${new Date().getDate()}` : new Date().getDate()).toString(),
            jam: (new Date().getHours().toString().length === 1 ? `0${new Date().getHours()}` : new Date().getHours()),
            menit: (new Date().getMinutes().toString().length === 1 ? `0${new Date().getMinutes()}` : new Date().getMinutes()),
            detik: (new Date().getSeconds().toString().length === 1 ? `0${new Date().getSeconds()}` : new Date().getSeconds())
            });
            document.querySelector("h1").innerHTML = `${this.state.tanggal}/${this.state.bulan}/${this.state.tahun} (${this.state.jam}:${this.state.menit}:${this.state.detik})`;
        }, 1000);
        return (
            <Box className="text-center">
                <br />
                <p className="lead">Current Time</p>
                <h1>Loading....</h1>
                <hr />
                <p className="lead" id="title">Road to my Birthday!</p>
                <h1 id="message"><div id="days">0</div> Days <div id="hours">0</div> Hours <div id="minutes">0</div> Minutes <div id="seconds">0</div> Seconds</h1>
            </Box>
        );
    }
}