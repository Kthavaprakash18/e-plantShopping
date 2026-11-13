import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
      const unitCost = typeof item.cost === 'string' ? parseFloat(item.cost.replace('$', '')) : item.cost;
      total += unitCost * item.quantity;
    });
    return total.toFixed(2);
  };

  const handleContinueShopping = (e) => {
    if (onContinueShopping) {
      onContinueShopping(e);
    }
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const calculateTotalCost = (item) => {
    const unitCost = typeof item.cost === 'string' ? parseFloat(item.cost.replace('$', '')) : item.cost;
    return (unitCost * item.quantity).toFixed(2);
  };

  const handleCheckoutShopping = () => {
    alert('Coming Soon! Checkout functionality will be added in a future update.');
  };

  return (
    <div className="cart-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
        Total Shopping Cart Amount: ${calculateTotalAmount()}
      </h2>

      {cart.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#666' }}>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                borderBottom: '1px solid #ddd',
                padding: '15px 0'
              }}
            >
              <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '4px' }} />
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: '0 0 5px' }}>{item.name}</h3>
                <p style={{ margin: '0 0 5px', color: '#666' }}>Unit Price: {item.cost}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0' }}>
                  <button onClick={() => handleDecrement(item)} style={{ width: '30px', height: '30px', cursor: 'pointer' }}>-</button>
                  <span style={{ fontWeight: 'bold' }}>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item)} style={{ width: '30px', height: '30px', cursor: 'pointer' }}>+</button>
                </div>
                <p style={{ margin: '0', fontWeight: 'bold' }}>Subtotal: ${calculateTotalCost(item)}</p>
              </div>
              <button
                onClick={() => handleRemove(item)}
                style={{ padding: '8px 16px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
        <button
          onClick={(e) => handleContinueShopping(e)}
          style={{ padding: '12px 24px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Continue Shopping
        </button>
        <button
          onClick={handleCheckoutShopping}
          style={{ padding: '12px 24px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
