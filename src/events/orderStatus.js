const OrderStatus = {
  // 1. When the order has been created but the ticket it is trying to order has not been reserved
  ORDER_CREATED: 'order-created',

  // 1. The ticket the order is trying to reserve has already been reserved
  // 2. Or when the user has cancelled the order
  // 3. The order expires before payment
  ORDER_CANCELLED: 'order-cancelled',

  // 1. The order has succesfully reserved the ticket and awaits payment
  ORDER_PENDING: 'order-pending',

  // 1. The order has reserved the ticket and the user has provided payment succesfully
  ORDER_COMPLETE: 'order-complete',
};

exports.OrderStatus = OrderStatus;
