import './cartPage.css';
import { Link } from 'react-router-dom';
import TicketCounter from '../../components/ticketcounter/TicketCounter';
import useTicketStore from '../../stores/useTicketStore';
import NavBar from '../../components/navbar/Navbar';

function CartPage() {
  const cart = useTicketStore(state => state.cart);
  // const ticket = cart.find(item => item.id === event.id);
  // const quantity = ticket ? ticket.quantity : 0;
  const totalSum = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);


  return (
    <section className="cart-page">
    <header className="cart-page__header">
      <h1 className="cart-page__title">Order</h1>
    </header>
    {cart.length === 0 ? (
        <p className="cart-page__empty-cart-message">Din varukorg är tom.</p>
      ) : (
        <>
          <ul className="cart-page__list">
            {cart.map((event) => (
              <li key={event.id} className="cart-page__list-item">
                <TicketCounter event={event} showPrice={false} />
              </li>
            ))}
          </ul>
          <section className="cart-page__sum-container">
            <p className="cart-page__sum-text">Totalt värde på order</p>
            <h3 className="cart-page__total-sum">{totalSum} SEK</h3>
          </section>
          <Link to='/orders' className='cart-page__link'>
            <button className="sendOrder__button">Skicka order</button>
          </Link>
        </>
      )}
      <NavBar />
  </section>
  )
}

export default CartPage;