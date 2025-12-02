// src/components/EventList.jsx
import CountdownCard from "./CountdownCard.jsx";

function EventList({ events, now, onDeleteEvent }) {
  if (!events.length) {
    return <p className="empty-text">No events yet. Add one above 👆</p>;
  }

  // Sort by datetime ascending
  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.datetime) - new Date(b.datetime)
  );

  return (
    <div className="event-list">
      {sortedEvents.map((event) => (
        <CountdownCard
          key={event.id}
          event={event}
          now={now}
          onDelete={() => onDeleteEvent(event.id)}
        />
      ))}
    </div>
  );
}

export default EventList;
