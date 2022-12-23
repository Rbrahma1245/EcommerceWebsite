// Create a Context
// Provider
// Consumer => use Context Hook

import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/ProductReducer"


const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products"



const initialState = {

    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
}




const AppProvider = ({ children }) => {


    const [state, dispatch] = useReducer(reducer, initialState);




    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const { data } = await axios.get(url);
            // console.log(data)
            dispatch({ type: "SET_API_DATA", payload: data });

            // console.log(products)
        }
        catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    }


    //2nd API CALL FOR SINGLE PRODUCT

    const getSingleProduct = async (url) => {

        dispatch({ type: "SET_SINGLE_LOADING" })
        try {
            const { data } = await axios.get(url);

            console.log(data)
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: data });
            // console.log(products)
        }
        catch (error) {
            dispatch({ type: "SINGLE_ERROR" })
        }
    }




    useEffect(() => {
        getProducts(API)
    }, [])





    return (
        <AppContext.Provider value={{ ...state, getSingleProduct }}>
            {children}
        </AppContext.Provider>
    )
}







//Custom Hook

const useProductContext = () => {
    return useContext(AppContext)
}
export { AppProvider, AppContext, useProductContext };