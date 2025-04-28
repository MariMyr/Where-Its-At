import "./eventitem.css";
import { Link } from "react-router-dom";

function EventItem({ event }) {
  const [day, month] = event.when.date.split(" ");
  return (
    <section className="eventitem">
      <Link to={`/details/${event.id}`} className="eventitem__link">
        <article className="eventitem__dates">
          <p className="eventitem__day">{day}</p>
          <p className="eventitem__month">{month.slice(0, 3).toUpperCase()}</p>
        </article>
        <article className="eventitem__info">
          <h3 className="eventitem__name">{event.name}</h3>
          <p className="eventitem__place">{event.where}</p>
          <article className="eventitem__time-price">
            <p className="eventitem__time">
              {event.when.from} - {event.when.to}
            </p>
            <p className="eventitem__price">{event.price} SEK</p>
          </article>
        </article>
      </Link>
    </section>
  );
}

export default EventItem;
