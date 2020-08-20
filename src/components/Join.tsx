import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Paper, TextField, Button } from '@material-ui/core'
import { actionTypes as actions } from '../actions/types'
import { stateT } from '../common/types'

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
                                onClick={() => dispatch({
                                    type: actions.joinUser,
                                    user: nickname
                                })}
                            >
                                Join
                            </Button>
                        </>
                        :
                        <Box color="secondary.main" pr={1}>
                            <Typography variant="h6">Hey, {user}!</Typography>
                        </Box>
                    }
                </Box>
            </Paper>
        </div>
    )
}