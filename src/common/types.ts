export type messageT = {
    user: string,
    text: string
};

export type stateT = {
    users: {
        user: string,
        usersList: string[],
    },
    messages: messageT[]
}