import { CREATE_PRODUCTS_FAILURE, CREATE_PRODUCTS_REQUEST, CREATE_PRODUCTS_SUCCESS, DELETE_PRODUCTS_FAILURE, DELETE_PRODUCTS_REQUEST, DELETE_PRODUCTS_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType";
import {api,  API_BASE_URL} from "../../config/apiConfig"
import axios from "axios";
// Find all products
const token = localStorage.getItem("Authorization");
export const findProducts = (reqData) => async(dispatch) => {
    dispatch({type: FIND_PRODUCTS_REQUEST})
    console.log("Daata before: ", reqData );
    const{category, colors, sizes, minPrice, maxPrice, minDiscount, sort, stock, pageNumber, pageSize} = reqData;
    try {
        // const {data} = await axios.get(`${API_BASE_URL}/api/products/findAll`);

        const {data} = await axios.get(`${API_BASE_URL}/api/products?category=${category}&color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&sort=${sort}&stock=${stock}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
    
        console.log("Data product-", data);
        dispatch({type: FIND_PRODUCTS_SUCCESS, payload: data})
    }
    catch(err) {
        dispatch({type: FIND_PRODUCTS_FAILURE, payload: err.message})
    }
}
// Find product by id
export const findProductById = (reqData) => async(dispatch) => {
    dispatch({type: FIND_PRODUCT_BY_ID_REQUEST})
    const {productId} = reqData;
    try {
        const {data} = await axios.get(`${API_BASE_URL}/api/products/id/${productId}`)
        console.log("Data detail: ", data);
        dispatch({type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data})
    }
    catch(err) {
        dispatch({type: FIND_PRODUCT_BY_ID_FAILURE, payload: err.message})
    }
}
export const createProduct = (product) => async(dispatch) => {
    dispatch({type: CREATE_PRODUCTS_REQUEST})
    try {
        const {data} = await api.post(`/api/admin/products/`, product)
        console.log("Data get all admin: ", data);
        dispatch({type: CREATE_PRODUCTS_SUCCESS, payload: data})
    }
    catch(err) {
        dispatch({type: CREATE_PRODUCTS_FAILURE, payload: err.message})
    }
}
export const deleteProductById = (productId) => async(dispatch) => {
    dispatch({type: DELETE_PRODUCTS_REQUEST})
    try {
        const {data} = await api.delete(`api/admin/products/delete/${productId}`)
        console.log("Data delete from admin: ", data);
        dispatch({type: DELETE_PRODUCTS_SUCCESS, payload: productId})
    }
    catch(err) {
        dispatch({type: DELETE_PRODUCTS_FAILURE, payload: err.message})
    }
}