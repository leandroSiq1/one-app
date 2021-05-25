import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CustomerCard from '../components/CustomerCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    margin: theme.spacing(2),
  }
}));

export default function Customers() {
  const classes = useStyles();
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then(response => {
        const { data } = response.data;
        setCustomers(data);
      })
  }, []);

  function handleRemoveCustomer(id) {
    axios.delete(`https://reqres.in/api/users/${id}`)
      .then(() => {
        const newCustomersState = customers.filter(customer => customer.id !== id);
        setCustomers(newCustomersState);
      })
  }

  return (
    <Grid container>
      {
        customers.map(item => (
          <Grid item xs={6} md={4} >
            <CustomerCard
              id={item.id}
              name={item.first_name}
              lastName={item.last_name}
              email={item.email}
              avatar={item.avatar}
              className={classes.card}
              onRemoveCustomer={handleRemoveCustomer}
            />
          </Grid>
        ))
      }
    </Grid>
  );
}

{
  // XS = EXTRA SMALL 
  // SM = SMALL
  // MD = MEDIUM
  // LG = LARGE
  // XL = EXTRA LARGE
}