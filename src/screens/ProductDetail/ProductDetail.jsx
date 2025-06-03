import {React, useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Product from '../../components/Product/Product'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(false);
  
  const { id } = useParams();

  console.log("ProductDetail" + id);

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
    <div>
      <Navbar/>
      <div className="products-grid">
      {productos
        .filter(producto => producto.id == id)
        .map(producto => (
          <Product key={producto.id} {...producto}/>
        ))
      }
      </div>
    </div>
  )
}

export default ProductDetail
