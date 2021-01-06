


const Shipping = () => {
  return (
    <form>
      <h2>Shipping method</h2>
      <p>Select the one you want</p>
      <input type="checkbox" />
      <p>Next day delivery</p>
      <p>£5.99</p>
      <input type="checkbox" />
      <p>Standard delivery</p>
      <p>£2.99</p>
      <input type="checkbox" />
      <p>Personal Pickup</p>
      <p>Free</p>
      <h2>Coupon code</h2>
      <p>Enter your cupon code</p>
      <input type="text" />
      <button>apply</button>
    </form>
  );
};
export default Shipping;
