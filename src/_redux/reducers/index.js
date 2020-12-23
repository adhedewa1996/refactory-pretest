import { combineReducers } from 'redux'

import partnerReducer from './partner'
import courseReducer from './course'
import asSeenOnReducer from './asSeenOn'

export default combineReducers({
    course: courseReducer,
    partner: partnerReducer,
    as_seen_on: asSeenOnReducer
})