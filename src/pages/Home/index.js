import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

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
    height: '100%',
    width:'100%',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down('xl')]: {
      marginBottom: '-8.8vh',
    },
    [theme.breakpoints.down('lg')]: {
      marginBottom: '-14.1vh',
    },
    [theme.breakpoints.down('md')]: {

      marginBottom: '20vh',
    },
    [theme.breakpoints.down('sm')]: {

      marginBottom: '20vh',
    },
  },
  zindex: {
    [theme.breakpoints.down('xl')]: {
      zIndex: 1,
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '20vh',
      marginLeft:'1vh'
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '20vh',
      marginBottom:'4vh',
      marginLeft:'2vh'
    },
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
  button: {
    [theme.breakpoints.down('xl')]: {
      height:'40vh',

    },
    [theme.breakpoints.down('lg')]: {
      height:'33vh',

    },
    margin: 0,
    height:'15vh',
    borderRadius:0,
    fontFamily: 'Roboto',
    fontSize: '1.vh',
    textTransform: 'none',
    justifyContent: 'left',

  },
}));

export default function Home() {
  const classes = useStyles();
  const [, setOpen] = React.useState(true);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div >
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
              <Grid style={{paddingLeft:35,paddingBottom:'4vh'}} className={classes.root}>
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
            <Grid item xs={12} md={6} lg={6} sm={10} className={classes.zindex}  >
              <Form  />
            </Grid>

        </Grid>

        </Container>

        <Button href='./home' variant="contained" color="primary" className={classes.button} style={{backgroundColor: '#006BB9',width:'38%'}} endIcon={<ArrowForwardIcon/>}>
          Login do Cliente
        </Button>
        <Button href='./home' variant="contained" color="primary" className={classes.button} style={{backgroundColor: '#177DDD',width:'62%'}} endIcon={<ArrowForwardIcon/>}>
          Login do Cliente
        </Button>

      </main>
    </div>
  );
}
