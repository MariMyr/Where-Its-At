import './cartPage.css';
import { Link, useNavigate } from 'react-router-dom';
import TicketCounter from '../../components/ticketcounter/TicketCounter';
import useCartStore from '../../stores/useCartStore';

function CartPage() {
  const cart = useCartStore(state => state.cart);
  const totalSum = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const addNewOrder = useCartStore((state) => state.addNewOrder);
  const navigate = useNavigate();

  const handleConfirmPurchase = () => {
    if (cart.length > 0) {
      addNewOrder([...cart]);
      navigate('/orders');
    }
  };

  return (
    <section className="cart-page">
      <Link to="/events" className="back__button" aria-label='Tillbaka'>
        <i className="fa-solid fa-arrow-left"></i>
      </Link>
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
          <button onClick={handleConfirmPurchase} className="sendOrder__button">
            Skicka order
          </button>
        </>
      )}
  </section>
  )
}

export default CartPage;