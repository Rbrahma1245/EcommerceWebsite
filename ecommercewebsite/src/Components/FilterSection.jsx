import React from 'react'
import { useFilterContext } from '../screens/Context/FilterContext'


const FilterSection = () => {

    const { filters: { text, category }, updateFilterValue, all_products } = useFilterContext()


    // TO GET UNIQUE DATA OF EACH FIELDS

    const getUniqueData = (data, property) => {
        let newVal = data.map((currElem) => {
            return currElem[property]
        })
        return (newVal = ["All", ...new Set(newVal)])

    }



    // WE NEED UNIQUE DATA

    const categoryData = getUniqueData(all_products, "category")




    return (
        <div>
            <div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" name="text" value={text}
                        onChange={updateFilterValue}
                        placeholder="Search..."
                    />
                </form>
            </div>
            <div>
                <h3>Category</h3>
                {
                    categoryData.map((currElem, index) => {
                        return (
                            <button key={index}
                                type='button' name='category' value={currElem}
                                onClick={updateFilterValue}   >

                                {currElem}
                            </button>
                        )

                    })
                }
            </div>

        </div>
    )
}

export default FilterSection
