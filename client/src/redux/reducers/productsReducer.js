import { productsTypes } from "../constants/types"

const initialState = {
    products: []
}

const productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        // api calls
        case productsTypes.GET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        // default
        default:
            return state
    }
}

export default productsReducer
