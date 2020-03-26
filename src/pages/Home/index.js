import React from 'react';

//local  import
import {  } from '../../components/styles';
import { ContainerAll } from './styles';
import Header from '../../components/Header';

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

import './styles.css';

import qrcode from '../../assets/qrcode.png';

import Form from './Form';

export default function Login() {

  return (
    <Grid component="main">
      <CssBaseline />
      <Header />
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        style={{marginTop:20}}
      >
          <Typography  variant="h6">Para sua segurança, você precisa ter acesso a sua conta através do aplicativo para celular.</Typography>
          <Container  align='center' id="formStyle"  maxWidth="sm">
              <Typography id="formStyleHome" variant="h5">Validação de Segurança</Typography>
              <Divider style={{marginLeft:30,marginRight:30, marginTop:20, marginBottom:20}} light />
              <Typography id="h2Form" variant="h8">O que devo fazer?</Typography>
              <Grid>
              <img style={{height:200}} src={qrcode} alt="Qrcode" />
              </Grid>
              <Form />
          </Container>



      </Grid>
    </Grid>

  );
}
