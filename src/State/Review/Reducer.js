import { REGISTER_SUCCESS } from "../Auth/ActionType"
import { FIND_REVIEW_FAILURE, FIND_REVIEW_REQUEST, FIND_REVIEW_SUCCESS, REVIEW_SUCCESS } from "./ActionType"

const initalState = {
    reviews: [],
    review: null,
    loading: false,
    error: null,
}
export const reviewCustomerReducer = (state=initalState, action) => {
    switch(action.type) {
        case FIND_REVIEW_REQUEST:
            return {...state, loading: true, error: null}
        case FIND_REVIEW_SUCCESS:
       
            return {...state, reviews: action.payload, loading: false, error: null}
            case REVIEW_SUCCESS:
                return {...state, review: action.payload, loading: false, error: null}
        case FIND_REVIEW_FAILURE:
            return {...state, error: action.payload, loading: false}
        default:
            return state;
    }
}