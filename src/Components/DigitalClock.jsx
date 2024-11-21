import { useState, useEffect } from "react";
import "../Components/digitalclock.css";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  function timeFormat() {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${hours}:${minutes}:${seconds} ${meridiem}`;
  }

  return (
    <>
      <div className="clock-container">
        <div className="clock">
          <span>{timeFormat()}</span>
        </div>
      </div>
    </>
  );
}
