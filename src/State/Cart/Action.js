import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType";
import {API_BASE_URL, api} from "../../config/apiConfig"
import axios from "axios";
const token = localStorage.getItem("jwt");
console.log("token", token);
export const getCart = () => async (dispatch) => {
    dispatch({type: GET_CART_REQUEST})
    try {
        const {data} = await api.get(`api/cart/`)
        dispatch({type: GET_CART_SUCCESS, payload: data})
        console.log("All cart: ", data);
    }
    catch(err) {
        dispatch({type: GET_CART_FAILURE, payload: err.message})
    }
}

export const addItemToCart = (reqData) => async(dispatch) => {
    console.log("token", token)
    dispatch({type: ADD_ITEM_TO_CART_REQUEST})
    console.log("Data before: ", reqData);
    try {
        // const {data} = await axios.put(`${API_BASE_URL}/api/cart/add`, {reqData, token});
        const {data} = await api.put(`/api/cart/add`, reqData);

        
        console.log("data add: ", data);
        dispatch({type: ADD_ITEM_TO_CART_SUCCESS, payload: data});
    }
    catch(err) {
        dispatch({type: ADD_ITEM_TO_CART_FAILURE, payload: err.message})
    }
}

export const removeItemToCart = (cartItemId) => async(dispatch) => {
    dispatch({type: REMOVE_CART_ITEM_REQUEST})
    try {
        const {data} = await api.delete(`/api/cart/${cartItemId}`)
        dispatch({type: REMOVE_CART_ITEM_SUCCESS, payload: data})
    }
    catch(err) {
        dispatch({type: REMOVE_CART_ITEM_FAILURE, payload: err.message})
    }
}

export const updateCartItem = (reqData) => async (dispatch) => {
    dispatch({type: UPDATE_CART_ITEM_REQUEST})
    try {
        const {data} = await api.put(`/api/cart/update/${reqData.cartItemId}`, reqData.data)
        dispatch({type: UPDATE_CART_ITEM_SUCCESS, payload: data})
    }
    catch(err) {
        dispatch({type: UPDATE_CART_ITEM_FAILURE, payload: err.message})
    }
}