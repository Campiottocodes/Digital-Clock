import { formatTime } from "./format-time";

function getCurrentTime(format = "24h") {
  const today = new Date();

  let hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  if (format === "12h") {
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return {
      hours: formatTime(hours.toString()),
      minutes: formatTime(minutes.toString()),
      seconds: formatTime(seconds.toString()),
      ampm,
      month: formatTime(month.toString()),
      year: formatTime(year.toString()),
    };
  } else {
    // ...
    return {
      hours: formatTime(hours.toString()),
      minutes: formatTime(minutes.toString()),
      seconds: formatTime(seconds.toString()),
      month: formatTime(month.toString()),
      year: formatTime(year.toString()),
    };
  }
}

export default getCurrentTime;
