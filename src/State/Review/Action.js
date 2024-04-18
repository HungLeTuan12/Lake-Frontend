import { api } from "../../config/apiConfig";
import { FIND_PRODUCTS_FAILURE } from "../Product/ActionType";
import { FIND_REVIEW_REQUEST, FIND_REVIEW_SUCCESS, REVIEW_FAILURE, REVIEW_REQUEST, REVIEW_SUCCESS } from "./ActionType"

export const createReview = (reqData) => async(dispatch) => {
    dispatch({type: REVIEW_REQUEST});
    const{productId, review} = reqData;
    console.log("req data before review: ", reqData);
    try {
        
        const response = await api.post(`/api/reviews/create`, reqData);
        console.log("Review get all admin: ", response.data);
        dispatch({type: REVIEW_SUCCESS, payload: response.data})
    }
    catch(err) {
        dispatch({type: REVIEW_FAILURE, payload: err.message})
    }
}
export const findReviewByProductID = (productId) => async(dispatch) => {
    dispatch({type: FIND_REVIEW_REQUEST});
    try {
        const response = await api.get(`/api/reviews/product/${productId}`);
        console.log("Review get by product ID: ", response.data);
        dispatch({type: FIND_REVIEW_SUCCESS, payload: response.data})
    }
    catch(err) {
        dispatch({type: FIND_PRODUCTS_FAILURE, payload: err.message})
    }
}