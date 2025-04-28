import './eventDetailsPage.css';
import { Link } from 'react-router-dom';
import SingleEventItem from '../../components/singleeventitem/SingleEventitem';

function EventDetailsPage() {
  return (
    <section className="details-page">
      <header className="details-page__header">
        <h1 className="details-page__title">Event</h1>
        <h3 className="details-page__text">You are about to score <br /> some tickets to</h3>
      </header>
      <SingleEventItem />
      <Link to='/cart'>
      <button className="addToCart__button">Lägg till i varukorgen</button>
      </Link>
    </section>
  )
}

export default EventDetailsPage;