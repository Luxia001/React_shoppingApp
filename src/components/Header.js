import "./Header.css";
import { useCart } from "../context.js/CartContext";
export function Header() {
  const { amount } = useCart();
  return (
    <header>
      <p>Shopping App</p>
      <p>Order count : {amount}</p>
    </header>
  );
}
