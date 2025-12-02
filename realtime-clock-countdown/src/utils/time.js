// src/utils/time.js
export function getTimeLeft(now, targetDate) {
  const totalMs = targetDate - now;

  if (totalMs <= 0) {
    return {
      totalMs,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const totalSeconds = Math.floor(totalMs / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor(
    (totalSeconds % (60 * 60 * 24)) / (60 * 60)
  );
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return {
    totalMs,
    days,
    hours,
    minutes,
    seconds,
  };
}
