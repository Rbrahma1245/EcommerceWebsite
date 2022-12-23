import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { TbReplace } from "react-icons/tb";
import { AiOutlineStar } from "react-icons/ai";


const StarRatings = ({ stars, reviews }) => {

    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5

        return (
            <span key={index}>
                {stars >= index + 1
                    ? (<FaStar className='star-icon' />)
                    : stars >= number
                        ? (<FaStarHalfAlt className='star-icon' />)
                        : (<AiOutlineStar className='star-icon' />)}
            </span>
        )
    })









    return (
        <div>
            {ratingStar}  ({reviews} customer reviews)
        </div>
    )
}

export default StarRatings
