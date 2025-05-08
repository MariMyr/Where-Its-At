import { create } from "zustand";
import generateOrderNumber from "../utils/generateOrderNumber";
import generateRandomSeat from "../utils/generateSeats";

const useCartStore = create((set) => ({
  cart: [],
  orders: [],

  addEvent: (event) => {
    set((state) => {
      const exists = state.cart.find((i) => i.id === event.id);
      if (exists) {
        return {
          cart: state.cart.map((i) =>
            i.id === event.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      } else {
        return {
          cart: [...state.cart, { ...event, quantity: 1 }],
        };
      }
    });
  },

  increaseQuantity: (id) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }));
  },

  decreaseQuantity: (id) => {
    set((state) => ({
      cart: state.cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: Math.max(0, item.quantity - 1) };
        }
        return item;
      }),
    }));
  },

  removeEvent: (id) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    }));
  },

  addNewOrder: (cartItems) => {
    const tickets = cartItems.flatMap((event) => {
      const { section, seats } = generateRandomSeat(event.quantity);

      return Array.from({ length: event.quantity }, (_, i) => ({
        id: Date.now() + Math.random(),
        orderNumber: generateOrderNumber(),
        event,
        seat: seats[i],
        section,
      }));
    });
    set((state) => ({
      orders: [...state.orders, ...tickets],
      cart: [],
    }));
  },
}));

export default useCartStore;
