import React, { useState } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  input: {
    paddingBottom: 20, 
    marginTop: 30
  },
  button: {
    marginTop: 20
  }
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

    axios.post('https://reqres.in/api/users', {
      name: form.name.value,
      job: form.job.value,
    }).then((response) => console.log(response));
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

      <Button onClick={handleRegisterButton} className={classes.button} variant="contained" color="secondary">
        Cadastrar
      </Button>
    </>
  );
}