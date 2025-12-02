// src/components/Clock.jsx
function Clock({ now }) {
  const timeString = now.toLocaleTimeString();
  const dateString = now.toLocaleDateString();

  return (
    <div className="clock">
      <div className="clock-time">{timeString}</div>
      <div className="clock-date">{dateString}</div>
    </div>
  );
}

export default Clock;
