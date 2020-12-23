import { GET_COURSE, GET_COURSE_SUCCESS, GET_COURSE_FAILURE } from "../../actions/types"

const initialState = {
    items: '',
    isFetching: false,
    error: false
}

export default function courseReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COURSE:
            return {
                ...state,
                items: '',
                isFetching: true
            }
        case GET_COURSE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: action.payload.course
            }
        case GET_COURSE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}