import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import Navbar from '../../components/Navbar/Navbar';
import { getProducts } from '../../services/products'; // Asegúrate que esta función devuelva un array o null/undefined

// Importa el CSS del ProductList
import './ProductList.css'; // Asegúrate de que este archivo exista

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); // Iniciar como true para mostrar "Cargando..." al inicio
    const [error, setError] = useState(null); // Usar null para representar sin error

    const fetchProductsList = async () => {
        setLoading(true); // Iniciar carga
        setError(null); // Limpiar errores previos

        try {
            const products_list_response = await getProducts();
            console.log('products_list_response:', products_list_response);

            // Importante: Asegurarse de que products_list_response sea un array
            if (Array.isArray(products_list_response)) {
                setProducts(products_list_response);
            } else if (products_list_response === null || products_list_response === undefined) {
                setError('No se pudieron cargar los productos. Respuesta vacía.');
                setProducts([]); // Asegurar que products sea un array vacío
            } else {
                // Si la respuesta no es un array (ej. objeto, string, etc.)
                setError('Formato de respuesta de productos inválido.');
                setProducts([]);
            }
        } catch (err) {
            console.error('Error al obtener productos:', err);
            setError('Error al obtener productos. Por favor, inténtalo de nuevo más tarde.');
            setProducts([]); // Asegurar que products sea un array vacío
        } finally {
            setLoading(false); // Finalizar carga
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
            <div className="products-grid"> {/* Contenedor para el Grid */}
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