import { api } from "../../../config/apiConfig";
import { CONFIRMED_ORDERS_FAILURE, CONFIRMED_ORDERS_REQUESTS, CONFIRMED_ORDERS_SUCCESS, DELETED_ORDERS_FAILURE, DELETED_ORDERS_REQUESTS, DELETED_ORDERS_SUCCESS, DELIVERED_ORDERS_FAILURE, DELIVERED_ORDERS_REQUESTS, DELIVERED_ORDERS_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUESTS, GET_ORDERS_SUCCESS, SHIPPED_ORDERS_FAILURE, SHIPPED_ORDERS_REQUESTS, SHIPPED_ORDERS_SUCCESS } from "./ActionType"

export const getAllOrders = () => async(dispatch) => {
    dispatch({type: GET_ORDERS_REQUESTS});
    try {
        const response = await api.get(`api/admin/orders/`);
        console.log("data get all orders: ", response.data);
        dispatch({type: GET_ORDERS_SUCCESS, payload: response.data});
    }
    catch(err) {
        dispatch({type: GET_ORDERS_FAILURE, payload: err.message})
    }
}
export const confirmOrder = (orderId) => async(dispatch) => {
    dispatch({type: CONFIRMED_ORDERS_REQUESTS});
    try {
        const response = await api.put(`api/admin/orders/confirmed/${orderId}`);
        const data = response.data;
        console.log("confirmed_order: ", data);
        dispatch({type: CONFIRMED_ORDERS_SUCCESS, payload: data});
    }
    catch(err) {
        dispatch({type: CONFIRMED_ORDERS_FAILURE, payload: err.message})
    }
}
export const shippedOrder = (orderId) => async(dispatch) => {
    dispatch({type: SHIPPED_ORDERS_REQUESTS});
    try {
        const response = await api.put(`api/admin/orders/shipped/${orderId}`);
        const data = response.data;
        console.log("shipped_order: ", data);
        dispatch({type: SHIPPED_ORDERS_SUCCESS, payload: data});
    }
    catch(err) {
        dispatch({type: SHIPPED_ORDERS_FAILURE, payload: err.message})
    }
}
export const deliveredOrder = (orderId) => async(dispatch) => {
    dispatch({type: DELIVERED_ORDERS_REQUESTS});
    try {
        const response = await api.put(`api/admin/orders/delivered/${orderId}`);
        const data = response.data;
        console.log("delivered_order: ", data);
        dispatch({type: DELIVERED_ORDERS_SUCCESS, payload: data});
    }
    catch(err) {
        dispatch({type: DELIVERED_ORDERS_FAILURE, payload: err.message})
    }
}
export const deleteOrder = (orderId) => async(dispatch) => {
    dispatch({type: DELETED_ORDERS_REQUESTS});
    try {
        const response = await api.delete(`api/admin/orders/deleted/${orderId}`);
        const data = response.data;
        console.log("deleted_order: ", data);
        dispatch({type: DELETED_ORDERS_SUCCESS, payload: data});
    }
    catch(err) {
        dispatch({type: DELETED_ORDERS_FAILURE, payload: err.message})
    }
}