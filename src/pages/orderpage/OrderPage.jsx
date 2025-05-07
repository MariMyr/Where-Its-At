import "./orderPage.css";
import { motion } from "framer-motion";
import TicketItem from "../../components/ticketitem/TicketItem";
import useCartStore from "../../stores/useCartStore";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OrderPage() {
  const orders = useCartStore((state) => state.orders);
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
      {orders.length === 0 ? (
        <p className="order-page__empty">Inga aktuella ordrar</p>
      ) : (
        <Slider {...settings}>
        {orders.map((order) =>
          order.items.map((event) =>
            Array.from({ length: event.quantity }).map((_, i) => {
              const slideIndex = 1;
              const seat = order.seats.seats[i];
              const section = order.seats.section;
    
              return (
                <div className="ticket-slide" 
                key={`${order.orderNumber}-${event.id}-${i}`}
                tabIndex={slideIndex === activeSlide ? 0: -1}
                >
                  <TicketItem
                    event={event}
                    orderNumber={order.orderNumber}
                    section={section}
                    seat={seat}
                  />
                </div>
              );
            })
          )
        )}
      </Slider>
      )}
    </motion.section>
  );
}

export default OrderPage;
