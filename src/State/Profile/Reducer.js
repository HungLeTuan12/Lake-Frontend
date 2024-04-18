import { GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS } from "./ActionType"

const initalState = {
    profile: null,
    loading: false,
    error: null,
}
export const profileCustomerReducer = (state=initalState, action) => {
    switch(action.type) {
        case GET_PROFILE_REQUEST:
            return {...state, loading: true, error: null}
        case GET_PROFILE_SUCCESS:
            return {...state, profile: action.payload, loading: false, error: null}
        case GET_PROFILE_FAILURE:
            return {...state, error: action.payload, loading: false}
        default:
            return state;
    }
}