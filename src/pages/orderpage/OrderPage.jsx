import "./orderPage.css";
import { motion } from "framer-motion";
import TicketItem from "../../components/ticketitem/TicketItem";
import NavBar from "../../components/navbar/Navbar";
import useTicketStore from "../../stores/useTicketStore";
import generateOrderNumber from "../../utils/generateOrderNumber";
import generateRandomSeat from "../../utils/generateSeats";
import { useEffect, useState } from "react";

function OrderPage() {
  const cart = useTicketStore((state) => state.cart);
  const [orderNumbers, setOrderNumbers] = useState([]);

  useEffect(() => {
    const generated = cart.flatMap((event) =>
      Array.from({ length: event.quantity }, () => generateOrderNumber())
    );
    setOrderNumbers(generated);
  }, [cart]);

  return (
    <motion.section
      className="order-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
           {cart.length === 0 ? (
        <p className="order-page__empty">Du har inga biljetter</p>
      ) : (
        cart.map((event, index) => {
          const seats = generateRandomSeat(event.quantity);
          return Array.from({ length: event.quantity }).map((_, ticketIndex) => (
            <TicketItem
              key={`${event.id}-${ticketIndex}-${orderNumbers[index + ticketIndex]}`}
              event={event}
              orderNumber={orderNumbers[index + ticketIndex]}
              section={seats.section}
              seat={seats.seats[ticketIndex]}
            />
          ))
        })
      )}
      <NavBar />
    </motion.section>
  );
}

export default OrderPage;
