import React from 'react';

//local  import
import {  } from '../../components/styles';
import Header from '../../components/Header';

//import from slider
import BackgroundSlider from 'react-background-slider';

//import image  from slider
import imagem1 from '../../assets/imagem.jpg';
import imagem2 from '../../assets/imagem2.jpg';



import { Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import Form from './Form'

const useStyles = makeStyles(theme => ({

  root: {

    [theme.breakpoints.down('xl')]: {
      display: 'flex',
      flexWrap: 'wrap',
      height:'90vh',
      paddingLeft:'70%'

    },
    [theme.breakpoints.down('lg')]: {
      display: 'flex',
      flexWrap: 'wrap',
      height:'85vh',
      paddingLeft:'45%'
    },

    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexWrap: 'wrap',
      height:'80vh',
      paddingLeft:'0%'
    },
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexWrap: 'wrap',
      height:'50vh',
      weight:'10vh'

    },
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Grid >
      <BackgroundSlider  images={[imagem1, imagem2]} duration={10} transition={2}   />
      <Header/>
        <Grid  className={classes.root} justify="center" container direction="row"  xl='11' lg='11' md='11' sm='11' xs='11' >
              <Form/>
        </Grid>


    </Grid>

  );
}
