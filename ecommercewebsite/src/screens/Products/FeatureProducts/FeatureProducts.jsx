import React from 'react';
import { useProductContext } from '../../Context/ProductContext'
import './index.css'
import Loader from "../../../Components/Loader"
import Product from '../Product';


const FeatureProducts = () => {
    const { isLoading, featureProducts, products } = useProductContext()
    // console.log(featureProducts)




    if (isLoading) return <Loader />




    return (
        <div className='main-feature-product'>
            <h3>Our Feature Services</h3>
            <div className='main-feature-container'>

                {featureProducts.map((currElem) => {
                    return < Product key={currElem.id} {...currElem} />
                })}

            </div>
        </div >
    )
}

export default FeatureProducts
