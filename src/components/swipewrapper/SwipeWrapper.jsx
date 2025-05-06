import { useSwipeable } from "react-swipeable";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./swipeWrapper.css";

const swipeRoutes = ["/", "/events", "/orders"];

function SwipeWrapper() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const index = swipeRoutes.indexOf(location.pathname);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  }, [location.pathname]);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < swipeRoutes.length - 1) {
        setDirection(-1);
        navigate(swipeRoutes[currentIndex + 1]);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        setDirection(1);
        navigate(swipeRoutes[currentIndex - 1]);
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  return (
    <section className="swipe-wrapper" {...handlers}>
      <AnimatePresence>
        <motion.div
          key={location.pathname}
          className="motion-page"
          initial={{ x: direction === -1 ? 300 : -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction === -1 ? -300 : 300, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>

      <section className="bullet-container">
        {swipeRoutes.map((_, index) => (
          <div
            key={index}
            className={`bullet ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </section>
    </section>
  );
}

export default SwipeWrapper;
