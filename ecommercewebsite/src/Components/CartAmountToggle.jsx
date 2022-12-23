import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
    return (
        <div>
            <div>
                <button onClick={() => setDecrease()}> <FaMinus /></button>
                {amount}
                <button onClick={() => setIncrease()}> <FaPlus /> </button>
            </div>
            <br />
            <NavLink to="/cart" > <button className='add-cart-btn'>ADD TO CART</button></NavLink>

        </div>
    )
}

export default CartAmountToggle
