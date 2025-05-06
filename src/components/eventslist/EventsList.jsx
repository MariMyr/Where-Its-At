import "./eventslist.css";
import EventItem from "../eventitem/EventItem";

function EventsList({ events }) {
  return (
    <section className="eventslist">
      {events.map((event, id) => (
        <EventItem key={id} event={event} />
      ))}
    </section>
  );
}

export default EventsList;
