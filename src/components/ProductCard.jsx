import React from 'react'
import CustomButton from './CustomButton'

export default function ProductCard({product, addToCart, setSelectedProduct}) {
  return (
    <div onClick={() => setSelectedProduct(product)} key={product.id} className="product-card">
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
        {"⭐".repeat(Math.floor(product.rating.rate))}
        <span className="rating-text">({product.rating.rate})</span>
        <span className="reviews">({product.rating.count} reviews)</span>
      </div>
      <div className="product-price">${product.price}</div>
    </div>
  </div>
  )
}
