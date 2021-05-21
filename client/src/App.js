import { useState, useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useStyles from './styles'
import Form from './components/Form/Form';
import List from './components/List/List';


function App() {
  const classes = useStyles();




  return (

    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Welcome to our Guest Book</Typography>

      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
            <Grid item xs={12} sm={7}>
              <List />
            </Grid>
          </Grid>
          <ToastContainer autoClose={5000} position="bottom-right" />
        </Container>
      </Grow>
    </Container>
  );
}

export default App;