import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Product from '../../components/Product/Product'
import './ProductList.css' // Importamos los estilos

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(false);

  const ObtenerProductos = async () => {
    setCargando(true);
    try {
      const response = await fetch('/products.json'); // Cambiado a ruta relativa
      const data = await response.json();
      setProductos(data);
    } catch (error) {
      console.error('Error al obtener productos:', error);
    } finally {
      setCargando(false);
    }
  }

  useEffect(() => {
    ObtenerProductos();
  }, []);

  return (
    <div className="product-list-container">
      <Navbar/>      
      {cargando ? (
        <div className="loading-message">Cargando productos...</div>
      ) : (
        <div className="products-grid">
          {productos.map(producto => (          
            <Product key={producto.id} {...producto}/>          
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductList