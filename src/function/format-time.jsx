export function formatTime(time) {
  const timeString = String(time);
  const isValid = timeString.length === 2;
  if (isValid) return timeString; // Retornar como string
  const newTime = timeString.padStart(2, 0);
  return newTime.toString(); // Retornar como string
}

export default formatTime;
