import "./eventDetailsPage.css";
import { Link } from "react-router-dom";
import SingleEventItem from "../../components/singleeventitem/SingleEventItem";

function EventDetailsPage() {
  return (
    <section className="details-page">
      <Link to="/events" className="back__button" aria-label="Tillbaka">
        <i className="fa-solid fa-arrow-left"></i>
      </Link>
      <header className="details-page__header">
        <h1 className="details-page__title">Event</h1>
        <h3 className="details-page__text">
          You are about to score <br /> some tickets to
        </h3>
      </header>
      <SingleEventItem />
      <Link to="/cart" className="details-page__link">
        <button className="addToCart__button">Lägg till i varukorgen</button>
      </Link>
    </section>
  );
}

export default EventDetailsPage;
