import { initialState } from '../common/consts'
import { actionTypes as actions, actionsT } from '../actions/types'

export function messages(state = initialState.messages, action: actionsT) {
    switch (action.type) {
        case actions.postMsg:
            return [...state, action.msg];
        default:
            return state;
    }
}