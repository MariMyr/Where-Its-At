import './eventitem.css';
import { Link } from 'react-router-dom';

function EventItem({ event }) {
  return (
    <section className="eventitem">
      <Link to={`/details/${event.id}`} className='eventitem__link'>
      <article className="eventitem__dates">
        <p className="date">{event.when.date}</p>
      </article>
      <h3 className="eventitem__name">{event.name}</h3>
      <p className="eventitem__place">{event.where}</p>
      <p className="eventitem__time">{event.when.from} - {event.when.to}</p>
      <p className="eventitem__price">{event.price}</p>
      </Link>
    </section>
  )
}

export default EventItem;