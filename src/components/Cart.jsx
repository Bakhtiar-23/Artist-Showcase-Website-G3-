// src/components/Cart.jsx
import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('');

  // Calculate total price by converting price strings to numbers
  const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '').replace(',', '')), 0);

  // Handle payment method selection
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>You Have Not Selected Items Yet</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.id}</td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="total-price">
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          </div>

          <div className="payment-methods">
            <h3>Choose a Payment Method:</h3>
            <select value={paymentMethod} onChange={handlePaymentMethodChange}>
              <option value="">Select</option>
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank-transfer">Bank Transfer</option>
            </select>
          </div>

          {paymentMethod && (
            <div className="proceed-button">
              <button onClick={() => alert('Proceeding to payment')}>Proceed to Payment</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
