import React from 'react'
import CustomButton from './CustomButton'

export default function ProductCard({productData, addToCart, setSelectedProduct}) {
  return (
    <div onClick={() => setSelectedProduct(productData)} key={productData.id} className="product-card">
    <div className="product-image">
      <img src={productData.image} alt={productData.name} />
      <div className="product-overlay">
        <CustomButton
          name="Add to Cart"
          onPress={() => addToCart(productData)}
        />
      </div>
    </div>
    <div className="product-info">
      <h3>{productData.name}</h3>
      <p className="product-category">{productData.category}</p>
      <div className="product-rating">
        {"⭐".repeat(Math.floor(productData.rating.rate))}
        <span className="rating-text">({productData.rating.rate})</span>
        <span className="reviews">({productData.rating.count} reviews)</span>
      </div>
      <div className="product-price">${productData.price}</div>
    </div>
  </div>
  )
}
