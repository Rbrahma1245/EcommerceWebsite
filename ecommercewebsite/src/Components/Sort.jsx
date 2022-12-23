import React from 'react'
import { useProductContext } from '../screens/Context/ProductContext'

const Sort = () => {
    const { isLoading, featureProducts, products } = useProductContext()
    return (
        <div className='sort-container'>

            <div>
                {products.length} Product Available
            </div>

            <div>
                {products.length} Product Available
            </div>
        </div>
    )
}

export default Sort
