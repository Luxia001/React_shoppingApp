import { useCart } from "../context.js/CartContext";
import "./Item.css";

export default function Item(props) {
  const { id, name, price, image, quantity } = props;
  const { formatMoney, removeItem, addQuantity, deleteQuantity } = useCart();
  return (
    <div className="card">
      <img src={props.image} alt={id} />
      <div className="product">
        <p className="name">name : {name}</p>
        <p className="price">price : {formatMoney(price)} Bath</p>
      </div>
      <div className="quantity">
        <button type="button" onClick={() => deleteQuantity(id)}>
          -
        </button>
        <input type="text" name="" value={quantity} disabled />
        <button type="button" onClick={() => addQuantity(id)}>
          +
        </button>
      </div>
      <div className="total-price">{formatMoney(quantity * price)}</div>
      <button type="" onClick={() => removeItem(id)}>
        delete
      </button>
    </div>
  );
}
