import React from 'react';
import CustomButton from './CustomButton';
import './ProductModal.css';

const ProductModal = ({ product, isOpen, onClose, onAddToCart }) => {

  // const [loading, setLoading] = useState(true);
  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        
        <div className="modal-body">
       
          <div className="modal-image-section">
            <img src={product.image} alt={product.name} className="modal-product-image" />
          </div>
          
          <div className="modal-info-section">
            <h2 className="modal-product-title">{product.name}</h2>
            <p className="modal-product-category">{product.category}</p>
            
            <div className="modal-product-rating">
              <div className="stars">
                {"⭐".repeat(Math.floor(product.rating.rate))}
                <span className="rating-text">({product.rating.rate})</span>
              </div>
              <span className="reviews">({product.rating.count} reviews)</span>
            </div>
            
            <div className="modal-product-price">${product.price}</div>
            
            <div className="modal-product-description">
              <h3>Description</h3>
              <p>{product.description || "No description available for this product."}</p>
            </div>
            
            <div className="modal-actions">
              <CustomButton 
                name="Add to Cart" 
                onPress={() => {
                  onAddToCart(product);
                  onClose();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal; 