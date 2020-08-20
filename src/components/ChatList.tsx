import React from 'react'
import { useSelector } from 'react-redux'
import { Paper, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { FixedSizeList, ListChildComponentProps } from 'react-window'
import { stateT } from '../common/types'

/*
const testList = [
    { name: 'John', text: 'Hey there!' },
    { name: 'John', text: 'I am here!' },
    { name: 'Jessy', text: 'Hi John' }
];
*/

export default () => {
    const messages = useSelector((state: stateT) => state.messages);

    function renderRow(props: ListChildComponentProps) {
        const { index } = props;
        return (
            <ListItem key={index} dense={true}>
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
            <FixedSizeList height={600} width={300} itemSize={46} itemCount={messages.length}>
                {renderRow}
            </FixedSizeList>
        </Paper>
    )
}