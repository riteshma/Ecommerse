import React, { useState } from 'react'
import DATA from '../Data';
import { NavLink, useParams } from 'react-router-dom'



const ProductDetail = () => {
    const proid = useParams();
    const proDetail = DATA.filter(x => x.id == proid.id);
    const product = proDetail[0];
    console.log(product);

    const [cartBtn, setCartBtn] = useState("Add to Cart");
    const { img, title, price, desc } = product;



    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            setCartBtn("Remove to Cart")
        } else {
            setCartBtn("Add to Cart")
        }
    }

    return (
        <>
            
                <div className='container my-5 py-3'>
                    <div className='row'>
                        <div className='col-md-6 d-flex justify-content-center mx-auto product'>
                            <img className='card1' src={img} alt={title} height="400px" />
                        </div>
                        <div className='col-md-6 d-flex flex-column justify-content-center'>
                            <h1 className='fw-bold'>{title}</h1>
                            <hr />
                            <h2 className='my-4' >{price}</h2>
                            <p>{desc}</p>
                            <NavLink className="btn btn-outline-primary" to='/checkout'>Checkout</NavLink>
                            <button onClick={() => handleCart(product)} className='btn btn-outline-primary my-3'>{cartBtn}</button>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default ProductDetail