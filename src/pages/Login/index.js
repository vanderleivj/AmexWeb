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

import { Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';


import Form from './Form'


export default function Login() {

  return (
    <Grid item xs={12} sm={12} md={12} component="main">
      <CssBaseline />
      <Header />
      <BackgroundSlider images={[imagem1, imagem2]} duration={10} transition={2} />
        <Grid
        style={{marginTop:'10vh',paddingRight:'6%'}}
        item xs={12} sm={12} md={12}
        container
        direction="row"
        justify="flex-end">
          <ContainerAll id="formStyle"  maxWidth="sm" >
              <Typography id="formTittle" variant="h5">Acesso do Cliente</Typography>
              <Divider light />
              <Form />
          </ContainerAll>
        </Grid>
    </Grid>

  );
}
