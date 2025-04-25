import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import EventsPage from './pages/eventspage/EventsPage';
import EventDetailsPage from './pages/eventdetailspage/EventDetailsPage';
import CartPage from './pages/cartpage/CartPage';
import OrderPage from './pages/orderpage/OrderPage';


const router = createBrowserRouter([
    {
        path : '/',
        element : <HomePage />,
    }, 
    {
        path : '/events',
        element : <EventsPage />,
    }, 
    {
        path : '/details/:id',
        element : <EventDetailsPage />,
    }, 
    {
        path : '/cart',
        element : <CartPage />,
    }, 
    {
        path : '/order',
        element : <OrderPage />
    }, 
]);

export default router;