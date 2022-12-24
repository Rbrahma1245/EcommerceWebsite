import React from 'react'
import { useFilterContext } from '../screens/Context/FilterContext'
import Product from '../screens/Products/Product'

import './index.css'

const ProductList = () => {

    const { filter_products } = useFilterContext()
    // console.log(filter_products)


    return (
        <div>
            <div className='product-list-container'>

                {filter_products.map((currElem) => {
                    return < Product key={currElem.id} {...currElem} />
                })}
            </div>
        </div>
    )
}

export default ProductList
