import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from '../Context/ProductContext'
import reducer from "../Reducer/FilterReducer"

export const FilterContext = createContext();


export const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext()


    const initialState = {
        filter_products: [],
        all_products: [],
        sorting_value: "lowest",
        filters: {
            text: "",
            category: "all",
            company: "all",
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)



    // SORTING FUNCTION

    const sorting = (event) => {
        let userValue = event.target.value
        dispatch({ type: "GET_SORT_VALUE", payload: userValue })
    }


    // SEARCH FUNCTIONALITY

    const updateFilterValue = (event) => {
        let name = event.target.name
        let value = event.target.value

        dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } })

    }



    // To sort the products

    useEffect(() => {
        dispatch({ type: "SORTING_PRODUCTS" })
        dispatch({ type: "FILTER_PRODUCTS" })
    }, [products, state.sorting_value, state.filters])




    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products])



    return (
        <FilterContext.Provider value={{ ...state, sorting, updateFilterValue }}>
            {children}
        </FilterContext.Provider>
    )

}



export const useFilterContext = () => {
    return useContext(FilterContext)
}