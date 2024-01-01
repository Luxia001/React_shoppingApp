import { createContext, useContext, useEffect, useReducer } from "react";
import product from "../data/product";
import cartReducer from "../reducer/cartReducer";

// create context
const CartContext = createContext();
const initState = {
  product: product,
  total: 0,
  amount: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initState);
  useEffect(() => {
    dispatch({ type: "CALCULATE_TOTAL" });
  }, [state.product]);

  function formatMoney(money) {
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  function addQuantity(id) {
    dispatch({ type: "ADD", payload: id });
  }

  function deleteQuantity(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function removeItem(id) {
    dispatch({ type: "REMOVE", payload: id });
  }

  return (
    <CartContext.Provider
      value={{ ...state, formatMoney, removeItem, addQuantity, deleteQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

// export context
export const useCart = () => {
  return useContext(CartContext);
};
