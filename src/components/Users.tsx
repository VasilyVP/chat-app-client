import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Paper, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import { stateT } from '../common/types'
import { useSocket } from '../middleware/sockets'
import { updateUsers, leaveChat } from '../actions'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        userItem: {
            color: 'green'
        },
        list: {
            ['@media (max-width:1280px)']: {
                maxHeight: "130px",
                overflow: "auto"
            }
        }
    }),
);

export default () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const socket = useSocket();
    const usersList = useSelector((state: stateT) => state.users.usersList);

    const usersItems = usersList.map((user, i) => (
        <ListItem key={i}>
            <ListItemAvatar>
                <Avatar>
                    <InsertEmoticonIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText className={classes.userItem} primary={user} />
        </ListItem>
    ));

    useEffect(() => {
        socket.on('disconnect', () => dispatch(leaveChat()));
        return () => { socket.off('disconnect', () => dispatch(leaveChat())) };
    });

    useEffect(() => {
        socket.on('users list update', (usersList: string[]) => {
            dispatch(updateUsers(usersList))
        });

        return () => { socket.off('users list update') }
    });

    return (
        <Paper>
            <List dense={false} className={classes.list}>
                {usersItems}
            </List>
        </Paper>
    )
}