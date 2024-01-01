import Item from "./Item";
import { useCart } from "../context.js/CartContext";

export function Cart() {
  const { product, total, formatMoney } = useCart();
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="cart">
        <h1 style={{ textAlign: "center" }}>
          {product.length > 0
            ? `Total price : ${formatMoney(total)}`
            : "no items available"}
        </h1>
        {product.map((data) => (
          <Item key={data.id} {...data}></Item>
        ))}
      </div>
    </div>
  );
}
