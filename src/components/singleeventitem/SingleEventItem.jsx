import './singleEventItem.css';
import TicketCounter from '../ticketcounter/TicketCounter';
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";

function SingleEventItem() {
    const [event, setEvent] = useState(null);
    const { data : events, isLoading, isError } = useFetch('https://santosnr6.github.io/Data/events.json');
    const { id } = useParams();
  
    useEffect(() => {
      if (id && events) {
        const foundEvent = events.find(e => e.id === id);
        setEvent(foundEvent);
      }    
    }, [id, events]);
  
    if (isLoading) {
      return <section className="page-text"><p>Loading...</p></section>;
    }
    if (isError) {
      return <section className="page-text"><p>Error loading event details.</p></section>;
    }
    if (!event) {
      return <section className="page-text"><p>Event not found.</p></section>;
    }

  return (
    <section className="single-event__info">
       <h1 className="single-event__name">{event.name}</h1>
       <p className="single-event__time">{event.when.date} kl {event.when.from} -{event.when.to}</p>
       <p className="single-event__place">@ {event.where}</p>
       <TicketCounter event={event}/>
    </section>
  )
}

export default SingleEventItem;