//import { Dispatch } from 'redux'
import { actionTypes } from './types'
import { messageT } from '../common/types'
import { useSocket } from '../middleware/sockets'

const types = actionTypes;
const socket = useSocket();

export function joinUser(user: string) {
    socket.emit('register user', user);

    return {
        type: types.joinUser,
        user: user
    }
}

export function updateUsers(usersList: string[]) {
    return {
        type: types.updateUsers,
        users: usersList
    }
}

export function leaveChat() {
    socket.emit('leave chat');

    return {
        type: types.leaveChat
    }
}

export function postMessage(message: messageT) {
    socket.emit('post message', message.text);

    return {
        type: types.postMsg,
        msg: message
    }
}

export function newMessage(message: messageT) {
    return {
        type: types.postMsg,
        msg: message
    }
}