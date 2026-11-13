import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "https://images.unsplash.com/photo-1599593406320-9111c1e7a33b?w=400", description: "Produces oxygen at night, purifying air.", cost: "$15" },
        { name: "Spider Plant", image: "https://images.unsplash.com/photo-1572688484438-3130463c7886?w=400", description: "Filters toxins from indoor environments.", cost: "$12" },
        { name: "Peace Lily", image: "https://images.unsplash.com/photo-1593482892290-f54927ae1eb6?w=400", description: "Removes mold spores and enhances air purity.", cost: "$18" },
        { name: "Boston Fern", image: "https://images.unsplash.com/photo-1596724855543-524857b6ec71?w=400", description: "Natural air humidifier and toxin absorber.", cost: "$14" },
        { name: "Rubber Plant", image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400", description: "Glossy leaves that absorb airborne pollutants.", cost: "$20" },
        { name: "Aloe Vera", image: "https://images.unsplash.com/photo-1567689265664-1c48de61db0b?w=400", description: "Purifies air and produces healing soothing gel.", cost: "$10" },
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        { name: "Lavender", image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?w=400", description: "Calming natural scent used in aromatherapy.", cost: "$20" },
        { name: "Jasmine", image: "https://images.unsplash.com/photo-1592729962299-6e3e57fefd4e?w=400", description: "Sweet and enchanting floral aroma.", cost: "$18" },
        { name: "Rosemary", image: "https://images.unsplash.com/photo-1515586000433-a5bc720b3623?w=400", description: "Invigorating herb with fragrant needle leaves.", cost: "$15" },
        { name: "Mint", image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400", description: "Crisp and refreshing herbal fragrance.", cost: "$10" },
        { name: "Lemon Balm", image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400", description: "Zesty lemon aroma that repels pests.", cost: "$12" },
        { name: "Gardenia", image: "https://images.unsplash.com/photo-1533616688419-b7a585564566?w=400", description: "Luxurious sweet blossoms with rich perfume.", cost: "$22" },
      ]
    },
    {
      category: "Low Maintenance Plants",
      plants: [
        { name: "ZZ Plant", image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=400", description: "Thrives in low light with minimal watering.", cost: "$22" },
        { name: "Pothos", image: "https://images.unsplash.com/photo-1598880940371-c756e015fea1?w=400", description: "Hardy trailing vine that tolerates neglect.", cost: "$14" },
        { name: "Cast Iron Plant", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400", description: "Nearly indestructible indoor foliage.", cost: "$25" },
        { name: "Jade Plant", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400", description: "Resilient succulent requiring infrequent care.", cost: "$15" },
        { name: "Haworthia", image: "https://images.unsplash.com/photo-1508022713622-df2d8fb7b4ea?w=400", description: "Compact succulent ideal for office desks.", cost: "$10" },
        { name: "Zebra Cactus", image: "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?w=400", description: "Distinctive striped patterns, needs little water.", cost: "$12" },
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  return (
    <div>
      <div className="navbar" style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <h2 style={{ color: 'white', margin: 0 }}>Paradise Nursery</h2>
          <span style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>Where Green Meets Serenity</span>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="#" onClick={handlePlantsClick} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Plants</a>
          <a href="#" onClick={handleCartClick} style={{ color: 'white', textDecoration: 'none', position: 'relative' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="36" width="36">
              <rect width="156" height="156" fill="none"></rect>
              <circle cx="80" cy="216" r="16"></circle>
              <circle cx="184" cy="216" r="16"></circle>
              <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
            </svg>
            <span style={{ position: 'absolute', top: '-5px', right: '-10px', background: '#ff5722', color: 'white', borderRadius: '50%', padding: '2px 7px', fontSize: '12px', fontWeight: 'bold' }}>
              {totalCartCount}
            </span>
          </a>
        </div>
      </div>

      {!showCart ? (
        <div className="product-grid" style={{ padding: '20px' }}>
          {plantsArray.map((category, index) => (
            <div key={index} style={{ marginBottom: '40px' }}>
              <h2 style={{ textAlign: 'center', margin: '20px 0', color: '#2e7d32' }}>{category.category}</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                {category.plants.map((plant, plantIndex) => (
                  <div key={plantIndex} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', width: '280px', textAlign: 'center', background: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                    <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
                    <h3 style={{ margin: '10px 0 5px' }}>{plant.name}</h3>
                    <p style={{ color: '#666', fontSize: '0.9rem', minHeight: '40px' }}>{plant.description}</p>
                    <p style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#333', margin: '10px 0' }}>{plant.cost}</p>
                    <button
                      disabled={addedToCart[plant.name]}
                      onClick={() => handleAddToCart(plant)}
                      style={{
                        padding: '10px 20px',
                        backgroundColor: addedToCart[plant.name] ? '#ccc' : '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: addedToCart[plant.name] ? 'not-allowed' : 'pointer',
                        fontWeight: 'bold',
                        width: '100%'
                      }}
                    >
                      {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
