import { useEffect, useState } from "react";

function Clockcurrenttime() {
  let [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    let time = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, []);
  return (
    <p className="time">
      This is the current time: {currentTime.toLocaleDateString()} -{" "}
      {currentTime.toLocaleTimeString()}
    </p>
  );
}

export default Clockcurrenttime;
