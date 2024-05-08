// Clock.js

import { useState, useEffect } from "react";
import getCurrentTime from "../../function/get-current-time";

function Clock({ format }) {
  const [time, setTime] = useState(getCurrentTime(format));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentTime(format));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>
        {format === "12h"
          ? `${time.hours}:${time.minutes}:${time.seconds} ${time.ampm}`
          : `${time.hours}:${time.minutes}:${time.seconds}`}
      </p>
    </div>
  );
}

export default Clock;
