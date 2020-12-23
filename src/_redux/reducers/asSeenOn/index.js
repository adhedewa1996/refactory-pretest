import { GET_AS_SEEN_ON, GET_AS_SEEN_ON_SUCCESS, GET_AS_SEEN_ON_FAILURE } from "../../actions/types"

const initialState = {
    items: '',
    isFetching: false,
    error: false
}

export default function asSeenOnReducer(state = initialState, action) {
    switch (action.type) {
        case GET_AS_SEEN_ON:
            return {
                ...state,
                items: '',
                isFetching: true
            }
        case GET_AS_SEEN_ON_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: action.payload.as_seen_on
            }
        case GET_AS_SEEN_ON_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}