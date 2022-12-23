import React from 'react'
import FilterSection from '../../Components/FilterSection'
import Loader from '../../Components/Loader'
import ProductList from '../../Components/ProductList'
import Sort from '../../Components/Sort'
import FormatPrice from '../../Helpers/FormatPrice'
import { useProductContext } from '../Context/ProductContext'

const Products = () => {
    const { isLoading } = useProductContext()


    if (isLoading) return <Loader />




    return (
        <div className='products-container-box'>
            <div className='products-container-page'>
                <div>
                    <FilterSection />
                </div>

                <div>
                    <div>
                        <Sort />
                    </div>
                    <br />
                    <div>
                        <ProductList />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
