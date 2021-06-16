import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography } from '@material-ui/core';

import { useHistory } from 'react-router-dom';

import useAuth from '../state/auth';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(3),
  }
}));

export default function Login() {
  const classes = useStyles();
  const history = useHistory();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const { user, setUser } = useAuth();
  
  function handleInputChange(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleFormSubmit() {
    setIsLoading(true);

    setTimeout(() => {
      setUser({
        logged: true,
        email: form.email,
      });

      history.push('/');

    }, 4000);
  }

  return (
    <>
      <Typography variant="h3">Acesso Restrito</Typography>

      <div className={classes.wrapper}>
        <TextField onChange={handleInputChange} label="Digite o seu e-mail" name="email" />
      </div>

      <div className={classes.wrapper}>
        <TextField type="password" onChange={handleInputChange} label="Digite sua senha" name="password" />
      </div>
      
      <div className={classes.wrapper}>
        <Button onClick={handleFormSubmit} variant="contained" color="primary">
          {
            isLoading ? 'Aguardando...' : 'Entrar' 
          }
        </Button>
      </div>
    </>
  );
}