import { messageT } from "../common/types";

export enum actionTypes {
    joinUser = 'Add new chat user',
    leaveChat = 'Leave chat',
    postMsg = 'Post new message',
    updateUsers = 'Update users list'
}

export type actionsT = {
    type: actionTypes,
    user: string,
    msg: messageT,
    users: string[],
}