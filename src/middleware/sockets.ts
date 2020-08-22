import io from 'socket.io-client'

const socketClient = io.connect();

export type socketClientT = typeof socketClient;

export function useSocket() {
    return socketClient;
}