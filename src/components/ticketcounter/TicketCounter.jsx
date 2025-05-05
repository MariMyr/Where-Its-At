import './ticketCounter.css';
import useCartStore from '../../stores/useCartStore';

function TicketCounter({event, showPrice = true}) {
    const cart = useCartStore(state => state.cart);
    const { addEvent, increaseQuantity, decreaseQuantity, removeEvent } = useCartStore();
    const ticket = cart.find(item => item.id === event.id);
    const quantity = ticket ? ticket.quantity : 0;

    const handleIncrease = () => {
        if (ticket) {
            increaseQuantity(event.id);
        } else {
            addEvent(event);
        }
    };
    const handleDecrease = () => {
        if (!ticket) return;

        if (ticket.quantity === 1) {
            removeEvent(event.id);
        } else {
            decreaseQuantity(event.id);
        }
    };

  return (
    <section className="ticket-container">
        {showPrice ? (
        <h3 className="ticket-cost">{event.price * quantity} SEK</h3>
        ) : (
            <section className="ticket__info">
                <h3 className="ticket__name">{event.name}</h3>
                <p className="ticket__time">{event.when.date} kl {event.when.from} -{event.when.to}</p>
            </section>
        )}
    <section className="ticket-counter">
        <button className="ticket-counter__button" onClick={handleDecrease}>-</button>
        <p className="ticket-counter__quantity">{quantity}</p>
        <button className="ticket-counter__button" onClick={handleIncrease}>+</button>
    </section>
    </section>
  )
}

export default TicketCounter;