import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"

const ProductCard = ({img, title, final_price, real_price, discount, id}) => {
    const [isBought, setIsBought] = useState(false)

    const handleClickBuyButton = () =>{
        alert("Gracias por su compra!")
        setIsBought(true)
    }

    let boton 
    if(isBought){
        boton = <button disabled>Comprado</button>
    }
    else{
        boton = <button 
                onClick={handleClickBuyButton} 
                className="divButton">Comprar</button>
    }

    return (        
        <div>
            <img src={img}/>
            <h3>{title}</h3>
            <div>
                <span className="real_price">U$s{real_price}</span>
                <span className="discount">{discount}%OFF</span>
            </div>
            <span className="final-price">U$s{final_price}</span>
            {boton}
            <h3></h3>
            <Link to={`/producto-detalle/${id}`} 
                  className="product-detail">Ver detalle
            </Link>
        </div>
    )
}

export default ProductCard