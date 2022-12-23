import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useProductContext } from '../Context/ProductContext'
import FormatPrice from "../../Helpers/FormatPrice"
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import MyImages from '../../Components/MyImages';
import Loader from '../../Components/Loader'
import StarRatings from '../../Components/StarRatings';
import AddToCart from '../../Components/AddToCart';

const API = "https://api.pujakaitem.com/api/products"

const SingleProduct = () => {
    const { id } = useParams();
    const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext()

    const { id: alias, company, image, name, price, description, category, reviews, stars, stock } = singleProduct




    useEffect(() => {
        getSingleProduct(API + `/?id=${id}`);
    }, [])



    if (isSingleLoading) return <Loader />
    return (

        <div className='container-back-button'>
            <NavLink to="/" > Home</NavLink> /{name}
            <div className='single-product-container'>


                <div className='column1'>
                    <MyImages image={image} />

                </div>
                <div className='column2'>
                    <h3>{name}</h3>
                    <StarRatings stars={stars} reviews={reviews} />
                    {/* <p> {stars}{reviews} (customer reviews)</p> */}
                    <p>
                        MRP:
                        <del>
                            <FormatPrice price={price + 250000} />
                        </del>
                    </p>
                    <p className='deals-of-the-day'>
                        Deals of the Day : <FormatPrice price={price} />
                    </p>
                    <p>{description} </p>

                    <div className='single-product-delivery'>
                        <div className='ttt'>
                            <TbTruckDelivery className='icon' />
                            <p>Free Delivery</p>
                        </div>
                        <div>
                            <TbReplace className='waranty-icon' />
                            <p>30 Days Replacement</p>
                        </div>
                        <div>
                            <TbTruckDelivery className='icon' />
                            <p>Delivered</p>
                        </div>
                        <div>
                            <MdSecurity className='icon' />
                            <p>2 Years Waranty</p>
                        </div>
                    </div>
                    <div>
                        <p>
                            Available :
                            <span >{stock > 0 ? " In Stock" : " Not Available"} </span>
                        </p>
                        <p>
                            ID : <span>{id}</span>
                        </p>
                        <p>
                            Brand : <span>{company}</span>
                        </p>
                    </div>
                    <hr />

                    {stock > 0 && <AddToCart product={singleProduct} />}

                </div>


            </div>
        </div>

    )
}

export default SingleProduct
