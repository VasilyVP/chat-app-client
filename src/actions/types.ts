import { messageT } from "../common/types";

export enum actionTypes {
    joinUser = 'Add new chat user',
    postMsg = 'Post new message'
}

export type actionsT = {
    type: actionTypes,
    user: string,
    msg: messageT
}