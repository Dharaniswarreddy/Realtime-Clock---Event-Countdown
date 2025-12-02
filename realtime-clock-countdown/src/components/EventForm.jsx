// src/components/EventForm.jsx
import { useState } from "react";

function EventForm({ onAddEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(""); // YYYY-MM-DD
  const [time, setTime] = useState(""); // HH:MM

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !date || !time) {
      alert("Please fill all fields.");
      return;
    }

    const datetimeString = `${date}T${time}:00`;
    const datetime = new Date(datetimeString);

    if (isNaN(datetime.getTime())) {
      alert("Invalid date or time.");
      return;
    }

    const newEvent = {
      id: crypto.randomUUID ? crypto.randomUUID() : Date.now(),
      title: title.trim(),
      datetime: datetime.toISOString(), // store as ISO string
      createdAt: new Date().toISOString(),
      notified: false,
    };

    onAddEvent(newEvent);
    setTitle("");
    setDate("");
    setTime("");
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <div className="field">
        <label>Event Name</label>
        <input
          type="text"
          placeholder="e.g. Project Deadline"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="field-inline">
        <div className="field">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>

      <button type="submit" className="btn-primary">
        Add Event
      </button>
    </form>
  );
}

export default EventForm;
