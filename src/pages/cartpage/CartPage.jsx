import './cartPage.css';
import { Link } from 'react-router-dom';

function CartPage() {
  return (
    <section className="cart-page">
    <header className="cart-page__header">
      <h1 className="cart-page__title">Order</h1>
    </header>
    <Link to='/orders'>
    <button className="sendOrder__button">Skicka order</button>
    </Link>
  </section>
  )
}

export default CartPage;