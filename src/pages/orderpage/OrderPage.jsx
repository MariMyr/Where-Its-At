import "./orderPage.css";
import { motion } from "framer-motion";
import TicketItem from "../../components/ticketitem/TicketItem";
import useCartStore from "../../stores/useCartStore";
import Slider from "react-slick";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OrderPage() {
  const orders = useCartStore((state) => state.orders);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: orders.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setActiveSlide(current),
  };

  if (orders.length === 0) {
    return (
      <motion.section
        className="order-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="order-page__empty">Inga aktuella ordrar</p>
      </motion.section>
    );
  }

  return (
    <motion.section
      className="order-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Slider {...settings}>
        {orders.map((ticket) => (
          <div className="ticket-slide" key={ticket.id}>
            <TicketItem
              event={ticket.event}
              orderNumber={ticket.orderNumber}
              section={ticket.section}
              seat={ticket.seat}
            />
          </div>
        ))}
      </Slider>
    </motion.section>
  );
}

export default OrderPage;
