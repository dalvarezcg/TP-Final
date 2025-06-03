import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'; // Asegúrate de crear este archivo CSS

const Product = ({id, title, img, final_price}) => {
  const navigate = useNavigate(); //   Declara el hook correctamente

  const handleDetailClick = () => {
    console.log('Detalle del producto:', id);
    navigate(`/producto-detalle/${id}`);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={img} alt={title} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <div className="product-price">${final_price.toLocaleString()}</div>
        <div className='divButton'>
            <button type="submit" 
                    className='button' 
                    onClick={handleDetailClick}>Detalle</button>
            <button type="submit" className='button'>Comprar</button>
          </div>
      </div>
    </div>
  );
}

export default Product;