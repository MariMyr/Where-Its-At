import "./orderPage.css";
import { motion } from "framer-motion";
import TicketItem from "../../components/ticketitem/TicketItem";
import useCartStore from "../../stores/useCartStore";
import getAllTickets from "../../utils/getAllTickets";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OrderPage() {
  const orders = useCartStore((state) => state.orders);
  const tickets = getAllTickets(orders);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setActiveSlide(current),
  };

  return (
    <motion.section
      className="order-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {tickets.length === 0 ? (
        <p className="order-page__empty">Inga aktuella ordrar</p>
      ) : (
        <Slider {...settings}>
          {tickets.map((ticket, index) => (
            <div
              className="ticket-slide"
              key={ticket.key}
              tabIndex={index === activeSlide ? 0 : -1}
            >
              <TicketItem
                event={ticket.event}
                orderNumber={ticket.orderNumber}
                section={ticket.section}
                seat={ticket.seat}
              />
            </div>
          ))}
        </Slider>
      )}
    </motion.section>
  );
}

export default OrderPage;