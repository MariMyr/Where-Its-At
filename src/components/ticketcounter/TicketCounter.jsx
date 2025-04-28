import './ticketCounter.css';
import useTicketStore from '../../stores/useTicketStore';

function TicketCounter({event}) {
    const cart = useTicketStore(state => state.cart);
    const { addTicket, increaseQuantity, decreaseQuantity } = useTicketStore();
    const ticket = cart.find(item => item.id === event.id);
    const quantity = ticket ? ticket.quantity : 0;

    const handleIncrease = () => {
        if (ticket) {
            // Om ticket redan finns, bara öka quantity
            increaseQuantity(event.id);
        } else {
            // Om ticket inte finns, lägg till i cart
            addTicket(event);
        }
    };

    const handleDecrease = () => {
        if (ticket && ticket.quantity > 0) {
            decreaseQuantity(event.id);
        }
    };


  return (
    <section className="ticket-container">
        <h3 className="ticket-cost">{event.price * quantity} SEK</h3>
    <section className="ticket-counter">
        <button className="ticket-counter__button" onClick={handleDecrease}>-</button>
        <p className="ticket-counter__quantity">{quantity}</p>
        <button className="ticket-counter__button" onClick={handleIncrease}>+</button>
    </section>
    </section>
  )
}

export default TicketCounter;