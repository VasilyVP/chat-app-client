import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Paper, TextField, Button, Box } from '@material-ui/core'
import { actionTypes as actions } from '../actions/types'
import { stateT } from '../common/types'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        textField: {
            //flexGrow: 1
        },
        button: {
            // width: '15%',
            height: 55
        }
    }),
);

export default () => {
    const classes = useStyles();
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const user = useSelector((state: stateT) => state.users.user)

    return (
        <div>
            <Paper>
                <Box display="flex" p={1}>
                    <Box flexGrow={1} m={1}>
                        <TextField
                            className={classes.textField}
                            id="outlined-basic"
                            label="Text here"
                            variant="outlined"
                            size="medium"
                            value={text}
                            onChange={e => setText(e.target.value)}
                            fullWidth />
                    </Box>
                    <Box m={1}>
                        <Button
                            className={classes.button} variant="contained" color="primary" size="large"
                            onClick={() => {
                                dispatch({
                                    type: actions.postMsg,
                                    msg: {
                                        user: user,
                                        text: text
                                    }
                                });
                                setText('');
                            }}
                        >
                            Send
                    </Button>
                    </Box>
                </Box>
            </Paper>
        </div >
    )
}