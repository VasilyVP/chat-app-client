import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Paper, TextField, Button, IconButton } from '@material-ui/core'
import { joinUser, leaveChat} from '../actions'
import { stateT } from '../common/types'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        textField: {
            width: '33ch',
        },
        button: {
            width: '15ch'
        }
    }),
);

export default () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = useSelector((state: stateT) => state.users.user);
    const [nickname, setNickname] = useState('');

    return (
        <div>
            <Paper>
                <Box className={classes.root} display="flex" justifyContent="flex-end">
                    {!user ?
                        <>
                            <TextField
                                id="nickname"
                                label="Nickname"
                                variant="outlined"
                                size="small"
                                value={nickname}
                                onChange={e => setNickname(e.target.value)} />
                            <Button
                                className={classes.button}
                                variant="outlined"
                                color="secondary"
                                onClick={() => dispatch(joinUser(nickname))}
                            >
                                Join
                            </Button>
                        </>
                        :
                        <Box className={classes.root} color="secondary.main" pr={1} display="flex" alignItems="center">
                            <Typography variant="h6">Hey, {user}!</Typography>
                            <IconButton onClick={() => dispatch(leaveChat())}>
                                <MeetingRoomIcon color="primary" />
                            </IconButton>
                        </Box>
                    }
                </Box>
            </Paper>
        </div>
    )
}