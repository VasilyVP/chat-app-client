import React from 'react'
import { useSelector } from 'react-redux'
//import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Container, Grid, CssBaseline, Box } from '@material-ui/core'
import Join from '../Join'
import ChatList from '../ChatList'
import MessageInput from '../MessageInput'
import Users from '../Users'
import './App.css';
import { stateT } from '../../common/types'

/*
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chatEl: {
      marginBottom: theme.spacing(1),
      //   width: '80%',
    }
  }),
);
*/

function App() {
  //const classes = useStyles();
  const user = useSelector((state: stateT) => state.users.user);

  return (
    <>
      <CssBaseline />
      <Container>
        <Box my={1}>
          <Join />
        </Box>
        {
          user ?
            <>
              <Grid container spacing={1}>
                <Grid item sm={8}>
                  <ChatList />
                  <Box mt={1}>
                    <MessageInput />
                  </Box>
                </Grid>
                <Grid item sm={4}>
                  <Users />
                </Grid>
              </Grid>
            </>
            : null
        }
      </Container>
    </>
  );
}

export default App;
