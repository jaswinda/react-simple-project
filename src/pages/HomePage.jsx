import React, { useState, useEffect } from "react";
import CustomButton from "../components/CustomButton";
import { useAuthContext } from "../context/useAuthContext";
import "./HomePage.css";
import { CATEGORIES_API, PRODUCTS_API } from "../util/apis";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

export default function HomePage() {
  const { logout } = useAuthContext();
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [categories, setCategories] = useState([
    "All",
    "Electronics",
    "Fashion",
    "Home & Kitchen",
  ]);

  const fetchCategories = async () => {
    try {
      const response = await fetch(CATEGORIES_API);
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  const fetchProducts = async () => {
    try {
      const response = await fetch(PRODUCTS_API);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

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
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#products">Products</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <div
              className="cart-icon"
              onClick={() =>
                document.getElementById("cart-sidebar").classList.toggle("open")
              }
            >
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
          <p>
            Shop the latest trends in electronics, fashion, and home essentials
          </p>
          <CustomButton
            name="Shop Now"
            onPress={() =>
              document
                .getElementById("products")
                .scrollIntoView({ behavior: "smooth" })
            }
          />
        </div>
      </section>

      {/* Category Filter */}
      <section className="category-filter">
        <div className="container">
          <h2>Shop by Category</h2>
          <div className="category-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
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
            {filteredProducts.map((product) => (
              <ProductCard product={product} addToCart={addToCart} setSelectedProduct={setSelectedProduct}  key={product.id}/>
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
            onClick={() =>
              document.getElementById("cart-sidebar").classList.remove("open")
            }
          >
            ✕
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>${item.price}</p>
                  <div className="quantity-controls">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
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
            <CustomButton
              name="Checkout"
              onPress={() => alert("Checkout functionality coming soon!")}
            />
          </div>
        )}
      </div>
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />
    </div>
  );
}
