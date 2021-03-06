import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { Paper } from '@mui/material';

import { getPosts } from '../../actions/posts';
import Pagination from '../Posts/Pagination';
import { mergeClasses } from '@material-ui/styles';

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getPosts()); 
    }, [currentId, dispatch]);
  
  return (
    <Grow in>
        <Container>
            <Grid container justifyContent='space-between' alignItems='stretch' spacing={3} margin-top='50px'>
                <Grid item xs={12} sm={7} >
                    <Posts setCurrentId={setCurrentId}  />
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                    <Paper elevation={6}> <Pagination />  </Paper>

                    
                </Grid>

            </Grid>
        </Container>
    </Grow>
  );
  };

export default Home