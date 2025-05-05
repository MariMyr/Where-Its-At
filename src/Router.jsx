import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import EventsPage from "./pages/eventspage/EventsPage";
import EventDetailsPage from "./pages/eventdetailspage/EventDetailsPage";
import CartPage from "./pages/cartpage/CartPage";
import OrderPage from "./pages/orderpage/OrderPage";
import SwipeWrapper from "./components/swipewrapper/SwipeWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SwipeWrapper />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/events",
        element: <EventsPage />,
      },
      {
        path: "/orders",
        element: <OrderPage />,
      },
    ],
  },
  {
    path: "/details/:id",
    element: <EventDetailsPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

export default router;
