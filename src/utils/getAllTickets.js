function getAllTickets(orders) {
    return orders.flatMap((order) =>
      order.items.flatMap((event) =>
        Array.from({ length: event.quantity }).map((_, i) => ({
          key: `${order.orderNumber}-${event.id}-${i}`,
          event,
          orderNumber: order.orderNumber,
          section: order.seats.section,
          seat: order.seats.seats[i],
        }))
      )
    );
  }

  export default getAllTickets;
  