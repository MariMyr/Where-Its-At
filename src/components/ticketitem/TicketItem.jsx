import './ticketItem.css';
import Barcode from 'react-barcode';

function TicketItem({ event, orderNumber }) {
  return (
    <section className="ticket-item">
        <section className="ticket__section">
            <h4 className="ticket__label">WHAT</h4>
            <h2 className="ticket__title">{event.name}</h2>
        </section>
        <section className="ticket__section">
            <h4 className="ticket__label">WHERE</h4>
            <h3 className="ticket__place">{event.where}</h3>
        </section>
        <section className="ticket__section ticket__when">
            <article>
                <h4 className="ticket__label">WHEN</h4>
                <p className="ticket__date">{event.when.date}</p>
            </article>
            <article>
                <h4 className="ticket__label">FROM</h4>
                <p className="ticket__from">{event.when.from}</p>
            </article>
            <article>
                <h4 className="ticket__label">TO</h4>
                <p className="ticket__to">{event.when.to}</p>
            </article>
        </section>
        <section className="ticket__section">
            <h4 className="ticket__label">INFO</h4>
            <p className="ticket__seats"></p>
        </section>
        <section className="ticket__barcode">
            <Barcode value={orderNumber} format="CODE128" />
        </section>
    </section>
  )
}

export default TicketItem;