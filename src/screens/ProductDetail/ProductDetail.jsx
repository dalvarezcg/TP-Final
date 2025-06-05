import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../services/products'
import Navbar from '../../components/Navbar/Navbar'
import ProductCard from '../../components/ProductCard/ProductCard'

const ProductDetail = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const {id} = useParams()

    console.log('ProductDetail.id:', id)
     const getProductDetail = async () => {        
          setLoading(true)
          setTimeout(
              async () => {
                  const product_detail_response = await getProductById({id})
                  if (product_detail_response) {
                      setProduct(product_detail_response)
                  }
                  else {
                      setError('Error al buscar producto')
                  }
                  setLoading(false)
              }
          )    
    }

    useEffect(
        () => {
            getProductDetail()
        },
        []
    )

    let content
    if(loading){
        content = <h2>Cargando...</h2>
    }
    else if(!loading && !product){
        content = <div>No encontrado</div>
    }
    else{
        content = 
        <div>            
            <ProductCard {...product} key={product.id}/>
        </div>
    }
  return (
    <div>
        <Navbar/>
        {content}
    </div>
  )
}

export default ProductDetail