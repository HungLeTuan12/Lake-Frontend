import { api } from "../../config/apiConfig";
import { GET_CART_FAILURE } from "../Cart/ActionType";
import { GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS } from "./ActionType"

export const getProfile = () => async(dispatch) => {
    dispatch({type: GET_PROFILE_REQUEST});
    try {
        const response = await api.get("/api/users/profile");
        console.log("Data from profile: ", response.data);
        dispatch({type: GET_PROFILE_SUCCESS, payload: response.data});
    }
    catch(err) {
        dispatch({type: GET_CART_FAILURE, payload: err.message});
    }
}