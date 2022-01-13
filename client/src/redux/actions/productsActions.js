import api from "../../api/axios"
import requests from "../../api/requests"
import { productsTypes } from "../constants/types"

export const getProducts = () => {
    return async dispatch => {
        try {
            const res = await api.get(requests.fetchProducts)
            dispatch({
                type: productsTypes.GET_PRODUCTS,
                payload: res.data,
            })
        } catch (err) {
            if (err.response) {
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            } else {
                console.log(`Error: ${err.message}`)
            }
        }
    }
}