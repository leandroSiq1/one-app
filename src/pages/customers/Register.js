import React, { useState } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, CircularProgress } from '@material-ui/core';

import Toasty from '../../components/Toasty';

const useStyles = makeStyles(() => ({
  input: {
    paddingBottom: 20, 
    marginTop: 30
  },
  button: {
    marginTop: 20,
  },
  boxLoading: {
    width: 250,
    height: "auto",
    display: "flex",
    alignItems: "center",
    gap: 15,
    paddingTop: 15,
  },
  circle: {
    position: "relative",
    top: 10,
  },
}));

export default function CustomersRegister() {
  const classes = useStyles();

  const [form, setForm] = useState({
    name: {
      value: "",
      error: false,
    },
    job: {
      value: "",
      error: false,
    },
  });

  const [openToasty, setOpenToasty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleInputChange(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: {
        value,
      }
    });
  }

  function handleRegisterButton() {
    let hasError = false;

    let newFormState = {
      ...form,
    }

    if (!form.name.value) {
      hasError = true;
      newFormState.name = {
        value: form.name.value,
        error: true,
        helperText: 'Digite o campo nome corretamente'
      }
    }

    if (!form.job.value) {
      hasError = true;
      newFormState.job = {
        value: form.job.value,
        error: true,
        helperText: 'Digite o campo nome corretamente'
      }
    }

    if (hasError) {
      return setForm(newFormState);
    }

    setIsLoading(true);
    register();
  }

  function register() {
    axios.post('https://reqres.in/api/users', {
      name: form.name.value,
      job: form.job.value,
    }).then((response) => {
      setOpenToasty(true);
      setIsLoading(false);
    });
  }

  return (
    <>
      <TextField 
        error={form.name.error}
        helperText={form.name.error ? form.name.helperText : ''}
        value={form.name.value} 
        onChange={handleInputChange} 
        name="name" 
        className={classes.input} 
        color="secondary" 
        label="Digite seu nome" 
        variant="outlined" 
      /> <br/>

      <TextField 
        error={form.job.error}
        helperText={form.job.error ? form.job.helperText : ''}
        value={form.job.value} 
        onChange={handleInputChange} 
        name="job" 
        color="secondary" 
        label="Digite seu cargo" 
        variant="outlined" 
      /> <br />

      <div className={classes.boxLoading}>
        { 
          isLoading ? 
            <CircularProgress 
              className={classes.circle} 
              size={30} 
              color="secondary" 
            /> 
          : ''
        }
        
        <Button 
          onClick={handleRegisterButton} 
          className={classes.button} 
          variant="contained" 
          color="secondary"
          disabled={isLoading}
        >
          { isLoading ? "Aguarde..." : "Cadastrar" }
        </Button>
      </div>
      
      <Toasty 
        open={openToasty} 
        severity="success" 
        message="Cadastro realizado com sucesso!" 
        onClose={() => setOpenToasty(false)}
      />
    </>
  );
}