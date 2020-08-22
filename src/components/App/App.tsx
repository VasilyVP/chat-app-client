import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Grid, CssBaseline, Box } from '@material-ui/core'
import Join from '../Join'
import ChatList from '../ChatList'
import MessageInput from '../MessageInput'
import Users from '../Users'
import './App.css';
import { stateT } from '../../common/types'

function App() {
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
              <Grid container direction="row-reverse" spacing={1}>
                <Grid item xs={12} sm={4}>
                  <Users />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <ChatList />
                  <Box mt={1}>
                    <MessageInput />
                  </Box>
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
