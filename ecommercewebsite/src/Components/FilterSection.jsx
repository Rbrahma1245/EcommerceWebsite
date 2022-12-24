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

    const companyData = getUniqueData(all_products, "company")



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
            <div className='btnn'>
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

            <div>
                <h3>Company</h3>

                <form onSubmit={(e) => e.preventDefault()}>
                    <select name="company" onClick={updateFilterValue} >
                        {
                            companyData.map((currElem, index) => {
                                return (
                                    <option key={index} name="company" value={currElem}> {currElem} </option>

                                )
                            })
                        }

                    </select>
                </form>
            </div>

        </div>
    )
}

export default FilterSection
