import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import Navbar from '../../components/Navbar/Navbar';
import { getProducts } from '../../services/products';
import './ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    const fetchProductsList = async () => {
        setLoading(true); // Iniciar carga
        setError(null); // Limpiar errores previos

        try {
            const products_list_response = await getProducts();
            console.log('products_list_response:', products_list_response);

            if (Array.isArray(products_list_response)) {
                setProducts(products_list_response);
            } else if (products_list_response === null || products_list_response === undefined) {
                setError('No se pudieron cargar los productos. Respuesta vacía.');
                setProducts([]); 
            } else {
                setError('Formato de respuesta de productos inválido.');
                setProducts([]);
            }
        } catch (err) {
            console.error('Error al obtener productos:', err);
            setError('Error al obtener productos. Por favor, inténtalo de nuevo más tarde.');
            setProducts([]); 
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProductsList();
    }, []);

    let content;
    if (loading) {
        content = <h2 className="loading-message">Cargando productos...</h2>;
    } else if (error) {
        content = <h2 className="error-message">Error: {error}</h2>;
    } else if (products.length === 0) {
        content = <h2 className="no-products-message">No hay productos disponibles.</h2>;
    } else {
        content = (
            <div className="products-grid"> 
                {products.map((product) => (
                    <ProductCard
                        {...product}
                        key={product.id}
                    />
                ))}
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div className="product-list-container">
                {content}
            </div>
        </div>
    );
};

export default ProductList;