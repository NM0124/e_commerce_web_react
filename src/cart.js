import cartImg from "./cart.png";

const Cart = () => {
  return (
    <div className="page cartPage">
      <h1 className="cartTitle">Your Shopping Cart</h1>

      <div className="cartEmpty">
        <img className="cartEmptyImg" src={cartImg} alt="empty cart" />
        <p>Your cart is currently empty.</p>
      </div>
    </div>
  );
};

export default Cart;
