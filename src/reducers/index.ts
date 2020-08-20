import { combineReducers } from 'redux'
import { users } from './users'
import { messages } from './messages'

const rootReducer = combineReducers({
    users,
    messages
})

export default rootReducer