import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Typography from '@material-ui/core/Typography';

import { Content, ContainerForm,ButtonForm } from '../../components/styles';

import '../../components/Header/gstyle.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  margin: {
    marginBottom: theme.spacing(7),
  },
  withoutLabel: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
  textField: {
    width: '100%',
  },
}));

export default function InputAdornments() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: '',
    weight: '',
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
    <div className={classes.root}>
      <div >
        <FormControl id="formLarge" className={clsx(classes.margin, classes.textField)} variant="outlined">
          <Typography  id="spaceForm" variant="h7">CPF do Cliente</Typography>
            <OutlinedInput
              placeholder="000.000.000-00"
              id="outlined-adornment-weight"
              value={values.weight}
              onChange={handleChange('weight')}
              inputProps={{
                'aria-label': 'weight',
              }}
              labelWidth={0}
            />
          </FormControl>

        <FormControl id="formLarge" className={clsx(classes.margin, classes.textField)} variant="outlined">
          <Typography id="spaceForm" variant="h7">Senha</Typography>
            <OutlinedInput
              placeholder="********"
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

              labelWidth={0}
            />
          </FormControl>
          <ButtonForm>
              <button style={{color: '#fff'}} type = "submit">Login do Cliente</button>
              <button style={{background: '#DEEAF6', color: '#828A92'}} type = "submit">Esqueceu a Senha</button>
          </ButtonForm>
      </div>
    </div>
  );
}
