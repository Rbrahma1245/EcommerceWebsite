import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../../Helpers/FormatPrice';
import './index.css';



const Product = (currElem) => {
    // console.log(currElem)
    const { id, name, image, price, category } = currElem;
    return (
        <div className='product-container'>

            <NavLink to={`/singleproduct/${id}`} ><img className="product-image" src={image} alt="Logo" /></NavLink>
            <br />
            <div className='text'>
                <p>{name}</p>
                <p className='product-price'>{<FormatPrice price={price} />}</p>
            </div>

        </div>
    )
}

export default Product
