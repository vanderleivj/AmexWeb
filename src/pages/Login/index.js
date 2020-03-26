import React from 'react';

//local  import
import {  } from '../../components/styles';
import { ContainerAll } from './styles';
import Header from '../../components/Header';

//import from slider
import BackgroundSlider from 'react-background-slider';

//import image  from slider
import imagem1 from '../../assets/imagem.jpg';
import imagem2 from '../../assets/imagem2.jpg';


//import from material
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { ThemeProvider, createMuiTheme,MuiContainer } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import Paper from '@material-ui/core/Paper';
import { Grid, Button } from '@material-ui/core';


import Form from './Form'


export default function Login() {

  return (
    <Grid component="main">
      <CssBaseline />
      <Header />
      <BackgroundSlider images={[imagem1, imagem2]} duration={10} transition={2} />
      <Grid container spacing={3}>

        <Grid item xs={12} sm={3} md={6}>

        </Grid>
        <Grid style={{marginTop:'5%'}} item xs={12} sm={6}>
          <Container id="formStyle"  maxWidth="sm">
              <Typography id="formTittle" variant="h5">Acesso do Cliente</Typography>
              <Divider light />
              <Form />
          </Container>

        </Grid>

      </Grid>
    </Grid>

  );
}
