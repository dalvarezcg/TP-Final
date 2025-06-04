import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"

const ProductCard = ({img, title, final_price, real_price, discount, id,  key}) => {
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
                <span className="real_price">${real_price}</span>
                <span className="discount">{discount}%OFF</span>
            </div>
            <span className="final-price">${final_price}</span>
            {boton}
            <Link to={`/product/${id}`}>Ver detalle</Link>
        </div>
    )
}

export default ProductCard