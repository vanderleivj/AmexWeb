import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';

import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom'

import apple from '../../assets/app-store.png'
import google from '../../assets/google-play.png'
import qrcode from '../../assets/qrcode.png'

import Header from '../../components/Header';

import { ContainerAll } from './styles';

import Form from './Form';

import './styles.css';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding:0,
    margin:0,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: '100%',

  },
}));

export default function Home() {
  const classes = useStyles();
  const [, setOpen] = React.useState(true);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div>
      <Header />
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <Grid>
                <Typography id="formTittle" variant="h6">
                  Para sua segurança, você precisa ter acesso a sua conta através do aplicativo para celular.
                </Typography>
                <Divider style={{marginTop:10}} light />
              </Grid>
              <Grid>
                <Typography id="spaceHome" variant="h6">
                  Controle sua conta pelo seu smartphone
                </Typography>
              </Grid>
              <Grid>
                <Typography id="spaceHomeSub" variant="subtitle1">
                  Através do aplicativo AMEX para celulares, você terá t
                  oda a segurança de uma conta American Express e poderá
                  realizar todas as transações e ter acesso as principais informações.
                </Typography>
              </Grid>
              <Grid>
                <Typography id="spaceHome" variant="h6">
                  Permissão de acesso Web
                </Typography>
              </Grid>
              <Grid>
                <Typography id="spaceHomeSub" variant="subtitle1">
                  Para a sua comodidade e segurança, basta clicar em “acessoweb”
                  no aplicativo AMEX para celular, e realizar a leitura do código
                  de barras ao lado. Insira no campo ao lado o código que aparecerá
                  na tela do seu smartphone.
                </Typography>
              </Grid>
              <Grid>
                <Typography id="spaceHome" variant="h6">
                  Instalar agora
                </Typography>
              </Grid>
              <Grid style={{paddingLeft:35}} className={classes.root}>
                <Grid  container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Link>
                      <img style={{height:70}} src={apple} alt="Apple" />
                    </Link>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Link>
                      <img style={{height:70}} src={google} alt="Google" />
                    </Link>
                  </Grid>
                </Grid>
            </Grid>

          </Grid>

            {/* Formulario */}

            <ContainerAll style={{marginLeft:'5%'}} id="formStyle"  maxWidth="lg" >
                <Typography id="formTittle" variant="h6">
                  Validação de Segurança
                </Typography>
                <Divider style={{margin:10}} />
                <Grid container direction="row" justify="center" alignItems="center">
                  <p style={{color:'#77B5F4'}}>O que devo fazer?</p>
                </Grid>
                <Grid container direction="row" justify="center" alignItems="center">
                  <img style={{height:200}} src={qrcode} alt="qrcode" />
                </Grid>
              <Form />
          </ContainerAll>

        </Grid>

        </Container>

        <Grid style={{background:'#000'}} >
            <Link></Link>
          </Grid>
      </main>
    </div>
  );
}
