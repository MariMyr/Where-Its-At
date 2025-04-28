import './eventslist.css';
import EventItem from '../eventitem/EventItem';
import useFetch from "../../hooks/useFetch";

function EventsList() {
  const { data : events, isLoading, isError } = useFetch('https://santosnr6.github.io/Data/events.json');
   
  if(isLoading) return <section className="page-text"><p>Loading...</p></section>;
  if(isError) return <section className="page-text"><p>Error</p></section> 

  if (!events) {
   return <section className="page-text"><p>No events available.</p></section>
  }

  return (
    <section className="eventslist">
      {events.map((event, id) => (
        <EventItem 
          key={id}
          event={event}
        />
      ))}
    </section>
  )
}

export default EventsList;