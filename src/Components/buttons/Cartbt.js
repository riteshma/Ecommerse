import React from 'react'
import { NavLink } from 'react-router-dom'

const Cartbt = () => {
    return (
        <>
            <NavLink to='/cart' className="btn btn-outline-primary">
                <i class="fa-solid fa-cart-shopping"></i>Cart ()
            </NavLink>
        </>
    )
}

export default Cartbt