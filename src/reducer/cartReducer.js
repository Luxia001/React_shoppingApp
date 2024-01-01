const cartReducer = (state, action) => {
  if (action.type === "CALCULATE_TOTAL") {
    const { total, amount } = state.product.reduce(
      (cartTotal, item) => {
        const { price, quantity } = item;
        const totalPrice = price * quantity;
        cartTotal.total += totalPrice;
        cartTotal.amount += quantity;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    return { ...state, total, amount };
  }

  if (action.type === "REMOVE") {
    return {
      ...state,
      product: state.product.filter((item) => item.id !== action.payload),
    };
  }

  if (action.type === "ADD") {
    let updateProduct = state.product.map((item) => {
      if (item.id === action.payload) {
        return {
          ...item,
          quantity: item.quantity++,
        };
      }
      return item;
    });
    return {
      ...state,
      product: updateProduct,
    };
  }
  if (action.type === "DELETE") {
    let updateProduct = state.product
      .map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity--,
          };
        }
        return item;
      })
      .filter((item) => item.quantity !== 0);
    return {
      ...state,
      product: updateProduct,
    };
  }
};

export default cartReducer;
