const FilterReducer = (state, action) => {

    switch (action.type) {

        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
            };


        case "GET_SORT_VALUE":
            return {
                ...state,
                sorting_value: action.payload
            };


        case "SORTING_PRODUCTS":
            let newSortData;

            const { filter_products, sorting_value } = state;
            let tempSortProduct = [...filter_products]


            const sortingProducts = (a, b) => {

                if (sorting_value === "lowest") {
                    return a.price - b.price
                }

                if (sorting_value === "highest") {
                    return b.price - a.price
                }

                if (sorting_value === "a-z") {
                    return a.name.localeCompare(b.name)
                }

                if (sorting_value === "z-a") {
                    return b.name.localeCompare(a.name)
                }
            }

            newSortData = tempSortProduct.sort(sortingProducts)

            return {
                ...state,
                filter_products: newSortData
            };



        case "UPDATE_FILTER_VALUE":

            const { name, value } = action.payload
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            };


        case "FILTER_PRODUCTS":
            let { all_products } = state;
            let tempFilterProducts = [...all_products]

            const { text, category, company } = state.filters

            if (text) {
                tempFilterProducts = tempFilterProducts.filter((currElem) => {
                    return currElem.name.toLowerCase().includes(text);
                })
            }

            if (category !== "all") {
                tempFilterProducts = tempFilterProducts.filter((currElem) => {
                    return currElem.category === category;
                })
            }

            if (company !== "all") {
                tempFilterProducts = tempFilterProducts.filter((currElem) => {
                    return currElem.company === company;
                })

            }

            return {
                ...state,
                filter_products: tempFilterProducts

            }




        default:
            return state;
    }

}




export default FilterReducer;