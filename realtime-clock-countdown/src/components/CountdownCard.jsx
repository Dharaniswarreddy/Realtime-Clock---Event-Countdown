// src/components/CountdownCard.jsx
import { getTimeLeft } from "../utils/time.js";

function CountdownCard({ event, now, onDelete }) {
  const eventDate = new Date(event.datetime);
  const { totalMs, days, hours, minutes, seconds } = getTimeLeft(
    now,
    eventDate
  );

  const isPast = totalMs <= 0;

  return (
    <div className={`event-card ${isPast ? "event-card--past" : ""}`}>
      <div className="event-header">
        <h3 className="event-title">{event.title}</h3>
        <button className="btn-danger" onClick={onDelete}>
          ✕
        </button>
      </div>

      <p className="event-datetime">
        Event time:{" "}
        <strong>
          {eventDate.toLocaleDateString()} {eventDate.toLocaleTimeString()}
        </strong>
      </p>

      {isPast ? (
        <p className="event-status started">✅ Event started</p>
      ) : (
        <div className="countdown">
          <div className="time-box">
            <span className="time-value">{days}</span>
            <span className="time-label">Days</span>
          </div>
          <div className="time-box">
            <span className="time-value">{hours}</span>
            <span className="time-label">Hours</span>
          </div>
          <div className="time-box">
            <span className="time-value">{minutes}</span>
            <span className="time-label">Minutes</span>
          </div>
          <div className="time-box">
            <span className="time-value">{seconds}</span>
            <span className="time-label">Seconds</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default CountdownCard;
