import './eventDetailsPage.css';
import { Link } from 'react-router-dom';

function EventDetailsPage() {
  return (
    <section className="details-page">
      <header className="details-page__header">
        <h1 className="details-page__title">Event</h1>
      </header>
      <Link to='/cart'>
      <button className="addToCart__button">Lägg till i varukorgen</button>
      </Link>
    </section>
  )
}

export default EventDetailsPage;