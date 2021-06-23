import "./cart-item.styles.scss";

const CartItem = ({ item: { name, price, quantity, imageUrl } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <div className="price">
        ${quantity} x ${price}
      </div>
    </div>
  </div>
);

export default CartItem;
