import "./eventsPage.css";
import SearchBar from "../../components/searchbar/SearchBar";
import EventsList from "../../components/eventslist/EventsList";
import EventItem from "../../components/eventitem/EventItem";
import NavBar from "../../components/navbar/Navbar";


function EventsPage() {
  return (
    <section className="events-page">
      <header className="events-page__header">
        <h1 className="events-page__title">Events</h1>
      </header>
      <EventsList />
      <NavBar />
    </section>
  );
}

export default EventsPage;
