import { CANCELLED_ORDERS_FAILURE, CANCELLED_ORDERS_REQUESTS, CANCELLED_ORDERS_SUCCESS, CONFIRMED_ORDERS_FAILURE, CONFIRMED_ORDERS_REQUESTS, CONFIRMED_ORDERS_SUCCESS, DELETED_ORDERS_FAILURE, DELETED_ORDERS_REQUESTS, DELETED_ORDERS_SUCCESS, DELIVERED_ORDERS_FAILURE, DELIVERED_ORDERS_REQUESTS, DELIVERED_ORDERS_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUESTS, GET_ORDERS_SUCCESS, PLACED_ORDERS_FAILURE, PLACED_ORDERS_REQUESTS, PLACED_ORDERS_SUCCESS, SHIPPED_ORDERS_FAILURE, SHIPPED_ORDERS_REQUESTS, SHIPPED_ORDERS_SUCCESS } from "./ActionType"

const initalState = {
    loading: false,
    orders: [],
    error: "",
}
export const adminOrderReducer = (state = initalState, action) => {
    switch(action.type) {
        case GET_ORDERS_REQUESTS: 
            return {
                ...state,
                loading: true
            }
        case GET_ORDERS_SUCCESS: 
            return {
                ...state,
                loading: false,
                orders: action.payload
            }
        case GET_ORDERS_FAILURE: 
            return {
                ...state,
                loading: false,
                orders: [],
                error: action.payload
            }
        case CONFIRMED_ORDERS_REQUESTS:
        case PLACED_ORDERS_REQUESTS:
        case DELIVERED_ORDERS_REQUESTS:
        case CANCELLED_ORDERS_REQUESTS:
            return {
                ...state,
                loading: true
            }
        case CONFIRMED_ORDERS_SUCCESS:
            return {
                ...state,
                confirmed : action.payload,
                loading: false
            }
        case PLACED_ORDERS_SUCCESS:
            return {
                ...state,
                placed : action.payload,
                loading: false
            }
            case DELIVERED_ORDERS_SUCCESS:
                return {
                    ...state,
                    delivered : action.payload,
                    loading: false
                }
            case CANCELLED_ORDERS_SUCCESS:
                return {
                    ...state,
                    deleted : action.payload,
                    loading: false
                }
                case CONFIRMED_ORDERS_FAILURE:
                    case PLACED_ORDERS_FAILURE:
                    case DELIVERED_ORDERS_FAILURE:
                    case CANCELLED_ORDERS_FAILURE:
                        return {
                            ...state,
                            loading: true,
                            error: action.payload
                        }
            case DELETED_ORDERS_REQUESTS:
                return {
                    ...state,
                    loading: true
                }
            case DELETED_ORDERS_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    deletedOrder: action.payload
                }
            case DELETED_ORDERS_FAILURE:
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                }
            case SHIPPED_ORDERS_REQUESTS:
                return {
                    ...state,
                    loading: true
                }
            case SHIPPED_ORDERS_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    shipped: action.payload
                }
            case SHIPPED_ORDERS_FAILURE:
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                }
            default:
                return state;
    }
}
