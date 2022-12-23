import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa';
import CartAmountToggle from './CartAmountToggle';

const AddToCart = ({ product }) => {
    const { id, colors, stock } = product;

    const [color, setColor] = useState(colors[0])
    const [amount, setAmount] = useState(1)


    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1)
    }
    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock)
    }



    return (
        <div >
            <div className='colors-container'>
                Colors :
                {colors.map((currColor, index) => {
                    return (
                        <button key={index} className="color-btn"
                            onClick={() => setColor(currColor)}
                            style={{ backgroundColor: currColor }}>
                            {color === currColor ? <FaCheck className='color-check' /> : null}
                        </button>
                    )
                })}
            </div>
            <br />

            <CartAmountToggle
                amount={amount}
                setDecrease={setDecrease}
                setIncrease={setIncrease}
            />


        </div>
    )
}

export default AddToCart
