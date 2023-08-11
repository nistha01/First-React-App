import React from "react";
import './ProductDisplay.css'

const ProductDisplay = (props)=>{
    console.log("inside productDisplay",props);

    const renderProduct = props.products.map((iteam) =>{
        return(
            <div className="card">
                <img src={iteam.image} alt={iteam.name}/>
                <hr/>
               <h3>{iteam.name}</h3>
               <p>{iteam.description}</p>
                <p>Rs.{iteam.cost}</p>
                <p>{iteam.uses}</p>
                
            </div>
        )
    })

    return(
        <div className='main'>
            {renderProduct}
        </div>
    )
}
export default ProductDisplay;