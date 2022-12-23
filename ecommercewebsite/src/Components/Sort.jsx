import React from 'react'
import './index.css'
import { useFilterContext } from '../screens/Context/FilterContext'

const Sort = () => {
    const { filter_products, sorting } = useFilterContext()
    return (
        <div className='sort-container'>

            <div>
                {filter_products?.length} Product Available
            </div>

            <div className='option-box'>
                <div className='custom-select'>
                    <select name="sort" id='sort' onClick={sorting}>
                        <option value="lowest">Price (lowest)</option>
                        <option value="highest">Price (highest)</option>
                        <option value="a-z">Price (a-z)</option>
                        <option value="z-a">Price (z-a)</option>

                    </select>
                </div>
            </div>
        </div>
    )
}

export default Sort
