import React, { useState } from 'react'
import CustomButton from '../components/CustomButton';
import { useAuthContext } from '../context/useAuthContext';
import './HomePage.css';

// Sample product data
const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    category: "Electronics",
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    name: "Premium Coffee Maker",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=300&h=300&fit=crop",
    category: "Home & Kitchen",
    rating: 4.8,
    reviews: 89
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
    category: "Electronics",
    rating: 4.6,
    reviews: 156
  },
  {
    id: 4,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
    category: "Fashion",
    rating: 4.3,
    reviews: 67
  },
  {
    id: 5,
    name: "Wireless Charging Pad",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop",
    category: "Electronics",
    rating: 4.4,
    reviews: 92
  },
  {
    id: 6,
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop",
    category: "Home & Kitchen",
    rating: 4.7,
    reviews: 203
  }
];

export default function HomePage() {
  const { logout } = useAuthContext();
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Electronics', 'Fashion', 'Home & Kitchen'];

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="ecommerce-home">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <h1>ShopHub</h1>
          </div>
          
          <nav className="nav">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <div className="cart-icon" onClick={() => document.getElementById('cart-sidebar').classList.toggle('open')}>
              <span className="cart-count">{cartItemCount}</span>
              🛒
            </div>
            <CustomButton onPress={logout} name="Logout" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Amazing Products</h1>
          <p>Shop the latest trends in electronics, fashion, and home essentials</p>
          <CustomButton name="Shop Now" onPress={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })} />
        </div>
      </section>

      {/* Category Filter */}
      <section className="category-filter">
        <div className="container">
          <h2>Shop by Category</h2>
          <div className="category-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section">
        <div className="container">
          <h2>Featured Products</h2>
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-overlay">
                    <CustomButton 
                      name="Add to Cart" 
                      onPress={() => addToCart(product)}
                    />
                  </div>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-category">{product.category}</p>
                  <div className="product-rating">
                    {'⭐'.repeat(Math.floor(product.rating))}
                    <span className="rating-text">({product.rating})</span>
                    <span className="reviews">({product.reviews} reviews)</span>
                  </div>
                  <div className="product-price">${product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shopping Cart Sidebar */}
      <div id="cart-sidebar" className="cart-sidebar">
        <div className="cart-header">
          <h3>Shopping Cart</h3>
          <button 
            className="close-cart"
            onClick={() => document.getElementById('cart-sidebar').classList.remove('open')}
          >
            ✕
          </button>
        </div>
        
        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>${item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <button 
                  className="remove-item"
                  onClick={() => removeFromCart(item.id)}
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>
        
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <strong>Total: ${getCartTotal().toFixed(2)}</strong>
            </div>
            <CustomButton name="Checkout" onPress={() => alert('Checkout functionality coming soon!')} />
          </div>
        )}
      </div>
    </div>
  )
}
