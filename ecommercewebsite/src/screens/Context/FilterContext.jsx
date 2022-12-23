import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from '../Context/ProductContext'
import reducer from "../Reducer/FilterReducer"

export const FilterContext = createContext();


export const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext()


    const initialState = {
        filter_products: [],
        all_products: [],
        sorting_value: "lowest"
    }
    const [state, dispatch] = useReducer(reducer, initialState)



    // SORTING FUNCTION

    const sorting = (event) => {
        let userValue = event.target.value
        dispatch({ type: "GET_SORT_VALUE", payload: userValue })

    }


    useEffect(() => {
        dispatch({ type: "SORTING_PRODUCTS" })

    }, [state.sorting_value])





    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products])



    return (
        <FilterContext.Provider value={{ ...state, sorting }}>
            {children}
        </FilterContext.Provider>
    )

}



export const useFilterContext = () => {
    return useContext(FilterContext)
}