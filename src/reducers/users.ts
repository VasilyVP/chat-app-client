import { initialState } from '../common/consts'
import { actionTypes as actions, actionsT } from '../actions/types'

export function users(state = initialState.users, action: actionsT) {
    switch (action.type) {
        case actions.joinUser:
            return {
                ...state,
                user: action.user,
              //  usersList: [ ...state.usersList, action.user ]
             };
        case actions.leaveChat:
            return {
                user: '',
                usersList: []
            };
        case actions.updateUsers:
            return {
                ...state,
                usersList: action.users
            };
        default:
            return state;
    }
}