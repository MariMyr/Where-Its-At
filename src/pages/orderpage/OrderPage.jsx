import "./orderPage.css";
import { motion } from "framer-motion";
import TicketItem from "../../components/ticketitem/TicketItem";
import useCartStore from "../../stores/useCartStore";
import generateOrderNumber from "../../utils/generateOrderNumber";
import generateRandomSeat from "../../utils/generateSeats";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OrderPage() {
  const cart = useCartStore((state) => state.cart);
  const [orderNumbers, setOrderNumbers] = useState([]);

  useEffect(() => {
    const generated = cart.flatMap((event) =>
      Array.from({ length: event.quantity }, () => generateOrderNumber())
    );
    setOrderNumbers(generated);
  }, [cart]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <motion.section
      className="order-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {cart.length === 0 ? (
        <p className="order-page__empty">Inga aktuella ordrar</p>
      ) : (
        <Slider {...settings}>
          {cart.map((event, index) => {
            const seats = generateRandomSeat(event.quantity);
            return Array.from({ length: event.quantity }).map(
              (_, ticketIndex) => (
                <div className="ticket-slide" key={`${event.id}-${ticketIndex}-${orderNumbers[index + ticketIndex]}`}>
                  <TicketItem
                    event={event}
                    orderNumber={orderNumbers[index + ticketIndex]}
                    section={seats.section}
                    seat={seats.seats[ticketIndex]}
                  />
                </div>
              )
            );
          })}
        </Slider>
      )}
    </motion.section>
  );
}

export default OrderPage;