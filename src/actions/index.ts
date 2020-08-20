//import { Dispatch } from 'redux'
import { actionTypes } from './types'
import { messageT } from '../common/types';

const types = actionTypes;

function joinUser(user: string) {
    return {
        type: types.joinUser,
        user: user
    }
}

function postMessage(message: messageT) {
    return {
        type: types.postMsg,
        msg: message
    }
}