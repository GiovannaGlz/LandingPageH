import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import { FormControl, MenuItem } from '@material-ui/core';

const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

class Form extends Component{
    render(){
          
        return(
            <FormControl>
                
                <TextField
                    id="filled-name-input"
                    label="Nombre Completo"
                    className="Name"
                    type="name"
                    name="name"
                    autoComplete="name"
                    margin="normal"
                    variant="filled"
                />

                <TextField required
                    id="filled-email-input"
                    label="Email"
                    className="Email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="filled"
                />

                <TextField required
                    id="filled-password-input"
                    label="Contraseña"
                    className="Password"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    variant="filled"
                />

                <TextField
                    id="filled-number"
                    label="Teléfono"
                    value=""
                    margin="normal"
                    variant="filled"
                />

                <TextField
                    id="filled-select-currency"
                    select
                    label="Select"
                    className="Select"
                    value={currencies.value}
                    helperText="Please select your currency"
                    margin="normal"
                    variant="filled"
                    />

            </FormControl>
        )
    }
}

export default Form;