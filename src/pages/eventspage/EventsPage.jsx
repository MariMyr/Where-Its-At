import "./eventsPage.css";
import SearchBar from "../../components/searchbar/SearchBar";
import EventsList from "../../components/eventslist/EventsList";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

function EventsPage() {
  const { data : events, isLoading, isError } = useFetch('https://santosnr6.github.io/Data/events.json');
   
  if(isLoading) return <section className="page-text"><p>Loading...</p></section>;
  if(isError) return <section className="page-text"><p>Error</p></section> 

  if (!events) {
   return <section className="page-text"><p>No events available.</p></section>
  }

  return (
    <section className="events-page">
      <header className="events-page__header">
        <h1 className="events-page__title">Events</h1>
      </header>
      <SearchBar events={events} />
      <EventsList events={events} />
    </section>
  );
}

export default EventsPage;
