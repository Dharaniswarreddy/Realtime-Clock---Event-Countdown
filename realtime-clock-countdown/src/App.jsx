// src/App.jsx
import { useEffect, useState } from "react";
import Clock from "./components/Clock.jsx";
import EventForm from "./components/EventForm.jsx";
import EventList from "./components/EventList.jsx";

const STORAGE_KEY = "realtime-clock-events";

function App() {
  const [events, setEvents] = useState([]);
  const [now, setNow] = useState(new Date());

  // 1) Load events from localStorage on first render
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setEvents(parsed);
      }
    } catch (err) {
      console.error("Failed to parse events from localStorage:", err);
    }
  }, []);

  // 2) Save events to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  }, [events]);

  // 3) Global clock ticking every second
  useEffect(() => {
    const id = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  // 4) Watch for events whose countdown reached 0 and show alert
  useEffect(() => {
    if (!events.length) return;

    let changed = false;
    const updated = events.map((ev) => {
      const diff = new Date(ev.datetime) - now;
      if (!ev.notified && diff <= 0) {
        changed = true;
        // Show alert when countdown ends
        window.alert(`⏰ Event "${ev.title}" has started!`);
        return { ...ev, notified: true };
      }
      return ev;
    });

    if (changed) {
      setEvents(updated);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [now]); // depend only on now; events come from latest render

  const handleAddEvent = (newEvent) => {
    setEvents((prev) => [...prev, newEvent]);
  };

  const handleDeleteEvent = (id) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <div className="app">
      <h1 className="app-title">Realtime Clock & Event Countdown</h1>

      <Clock now={now} />

      <section className="panel">
        <h2>Add New Event</h2>
        <EventForm onAddEvent={handleAddEvent} />
      </section>

      <section className="panel">
        <h2>Upcoming Events</h2>
        <EventList
          events={events}
          now={now}
          onDeleteEvent={handleDeleteEvent}
        />
      </section>
    </div>
  );
}

export default App;
