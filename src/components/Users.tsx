import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Paper, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import { stateT } from '../common/types'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        userItem: {
            color: 'green'
        },
        list: {
            height: 600
        }
    }),
);

export default () => {
    const classes = useStyles();
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

    return (
        <Paper>
            <List dense={false} className={classes.list} >
                {usersItems}
            </List>
        </Paper>
    )
}