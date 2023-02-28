import React, { useState } from "react";

const Timer = (props) => {
  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  const deadline = props.eventDate;
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  React.useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-block mt-1 text-center w-80" role="timer">
      <div className="w-1/4 float-left ">
        <div className="font-bold text-lg">
          <p id="day">{days < 10 ? "0" + days : days}</p>
        </div>
        <span className="text">Days</span>
      </div>
      <div className="w-1/4 float-left text-lg">
        <div className="font-bold">
          <p id="hour">{hours < 10 ? "0" + hours : hours}</p>
        </div>
        <span className="text">Hours</span>
      </div>
      <div className="w-1/4 float-left text-lg">
        <div className="font-bold">
          <p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
        </div>
        <span className="text">Minutes</span>
      </div>
      <div className="w-1/4 float-left text-lg">
        <div className="font-bold">
          <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
        </div>
        <span className="text">Seconds</span>
      </div>
    </div>
  );
};
export default Timer;
