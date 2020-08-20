import { initialState } from '../common/consts'
import { actionTypes as actions, actionsT } from '../actions/types'

export function users(state = initialState.users, action: actionsT) {
    switch (action.type) {
        case actions.joinUser:
            return { 
                user: action.user,
                usersList: [ ...state.usersList, action.user ]
             };
        default:
            return state;
    }
}