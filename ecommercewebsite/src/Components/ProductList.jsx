import React from 'react'
import { useProductContext } from '../screens/Context/ProductContext'
import Product from '../screens/Products/Product'
import './index.css'

const ProductList = () => {
    const { isLoading, featureProducts, products } = useProductContext()
    return (
        <div>
            <div className='product-list-container'>

                {products.map((currElem) => {
                    return < Product key={currElem.id} {...currElem} />
                })}
            </div>
        </div>
    )
}

export default ProductList
