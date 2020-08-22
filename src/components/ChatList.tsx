import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Paper, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core'
import { useMediaQuery } from '@material-ui/core'
//import { useTheme } from '@material-ui/core/styles'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { FixedSizeList, ListChildComponentProps } from 'react-window'
import { stateT, messageT } from '../common/types'
import { useSocket } from '../middleware/sockets'
import { newMessage } from '../actions'
import 'react-virtualized/styles.css';

export default () => {
    const messages = useSelector((state: stateT) => state.messages);
    const dispatch = useDispatch();
    const socket = useSocket();
    const listRef = useRef<FixedSizeList>(null);

    const lessLg = useMediaQuery('(max-width:1280px)');

    let height = 600;
    if (lessLg) height = 400;

    useEffect(() => {
        socket.on('new message', (message: messageT) => dispatch(newMessage(message)));
        return () => { socket.off('new message') };
    });

    useEffect(() => {
        if (listRef.current !== null) listRef.current.scrollToItem(messages.length - 1, 'end');
    }, [messages.length]);

    function renderRow(props: ListChildComponentProps) {
        const { index, style } = props;
        return (
            <ListItem key={index} dense={true} style={style}>
                <ListItemAvatar>
                    <Avatar>
                        <InsertEmoticonIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={messages[index].text}
                    secondary={messages[index].user}
                />
            </ListItem>
        )
    }

    return (
        <Paper>
            <FixedSizeList
                height={height}
                width={'100%'}
                itemSize={46}
                itemCount={messages.length}
                ref={listRef}
            >
                {renderRow}
            </FixedSizeList>
        </Paper>
    )
}