import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Link from '@material-ui/core/Link';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import Grid from '@material-ui/core/Grid';

//icones
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import HttpsIcon from '@material-ui/icons/Https';

import Divider from '@material-ui/core/Divider';

import qrcode from '../../assets/qrcode.png'


import './styles.css'

const useStyles = makeStyles(theme => ({

  root: {
    [theme.breakpoints.down('xl')]: {
      display: 'flex',
      flexWrap: 'wrap',
      width:'450px',
      marginLeft: '100px',
      alignContent:'center',

  },
    [theme.breakpoints.down('lg')]: {
      display: 'flex',
      flexWrap: 'wrap',
      width:'450px',
      height:'100%',
      alignContent:'center',
  },
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexWrap: 'wrap',
      width:'400px',
      height:'100%',
      marginLeft:'3vh',
      alignContent:'center',
  },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexWrap: 'wrap',
      width:'450px',
      height:'80vh',

      alignContent:'center',
  },
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexWrap: 'wrap',
      width:'100%',
      height:'80vh',
      alignContent:'center',
      paddingLeft:'25px'
  },


  },
  margin: {
    [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(2),
    },
    margin: theme.spacing(2),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '90%',
  },
  subHeader: {
    width:'100%',
    border: 0,
    color: '#77B5F4',
    textTransform: 'none',
  },
  button: {
    [theme.breakpoints.down('sm')]: {
      height:'10vh'
  },
    [theme.breakpoints.down('lg')]: {
      height:'12vh'
  },
    [theme.breakpoints.down('md')]: {
      height:'11vh'
  },
    [theme.breakpoints.down('sm')]: {
      marginTop:'10%'
  },
    margin: 0,
    width:'100%',
    height:'7.5vh',
    marginTop:'15%',
    borderRadius:0,
    fontFamily: 'Roboto',
    fontSize: '1.vh',
    textTransform: 'none',

  }
}));


export default function InputAdornments() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (

    <div  className={classes.root} >
      <div id='container' >
        <p className={clsx(classes.margin, classes.textField)} style={{fontSize:'24px', paddingTop:'5%'}}>Validação de Segurança</p>
        <Divider className={clsx(classes.margin, classes.textField)} />
        <Button className={clsx(classes.subHeader)} variant="outlined"endIcon={<InfoRoundedIcon/>}>O que devo fazer?</Button>
        <Grid container direction="row" justify="center" alignItems="center">
            <img style={{height:200}} src={qrcode} alt="qrcode" />
        </Grid>

        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined"style={{marginBottom:'50px'}}>
          <p className="fontForm">Digite o código gerado em seu celular</p>
          <OutlinedInput
            placeholder="*********"
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }

          />
        </FormControl>
        <Button href='./home' variant="contained" color="primary" className={classes.button} style={{backgroundColor: '#66A7E3'}} endIcon={<ArrowForwardIcon/>}>
          Login do Cliente
        </Button>
      </div>

    </div>
  );
}
