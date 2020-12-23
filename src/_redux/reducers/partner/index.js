import { GET_PARTNER, GET_PARTNER_SUCCESS, GET_PARTNER_FAILURE } from "../../actions/types"

const initialState = {
    items: '',
    isFetching: false,
    error: false
}

export default function partnerReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PARTNER:
            return {
                ...state,
                items: '',
                isFetching: true
            }
        case GET_PARTNER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: action.payload.partner
            }
        case GET_PARTNER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}