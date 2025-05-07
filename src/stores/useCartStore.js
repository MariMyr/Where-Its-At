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
    const orderNumber = generateOrderNumber();
    const seats = generateRandomSeat(
      cartItems.reduce((sum, item) => sum + item.quantity, 0)
    );
  
    const order = {
      id: Date.now(), 
      orderNumber,
      seats,
      items: [...cartItems],
    };
  
    set((state) => ({
      orders: [...state.orders, order],
      cart: [], 
    }));
  },
}));

export default useCartStore;
