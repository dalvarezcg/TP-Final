import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import { getProducts } from '../../services/products'

const ProductList = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false) // Iniciar como true
    const [error, setError] = useState(false)

    const getProductsList = async () => {
        setLoading(true)
        setTimeout(
            async () => {
                const products_list_response = await getProducts()
                console.log('products_list_response:', products_list_response)
                if (products_list_response) {
                    setProducts(products_list_response)
                }
                else {
                    setError('Error al obtener productos')
                }
                setLoading(false)
            },
            2000
        )
    }

    useEffect(() => {
        getProductsList()
    }, [])


    const componentes = products.map(
        (product) => {
            return <ProductCard
                {...product}
                key={product.id}
                title={product.title}
            />
        }
    )
    let content
    if (loading) {
        content = <h2>Cargando...</h2>
    }
    else {
        if (error) {
            content = <h2>{error}</h2>
        }
        else {
            content = componentes
        }
    }

    return (
        <div >
            {content}
        </div>
    )
}
export default ProductList