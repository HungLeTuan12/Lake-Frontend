import { DELETE_PRODUCTS_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType"

const initalState = {
    products: [],
    product: null,
    loading: false,
    error: null,
    deleted: null
}
export const customerProductReducer = (state=initalState, action) => {
    switch(action.type) {
        case FIND_PRODUCTS_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
            return {...state, loading: true, error: null}
        case FIND_PRODUCTS_SUCCESS:
            return {...state, loading: false, products: action.payload, error: null}
        case FIND_PRODUCT_BY_ID_SUCCESS:
            return {...state, loading: false, product: action.payload, error: null}
        case DELETE_PRODUCTS_SUCCESS:
            return {...state, loading: false, deleted: action.payload, error: null}
        case FIND_PRODUCTS_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}