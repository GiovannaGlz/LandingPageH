import React, { Component } from 'react';
import {Typography, TextField, MenuItem} from '@material-ui/core';
import { number } from 'prop-types';

const agency = [
    {
        country: 'Polanco',
    },
    {
        country: 'Pedregal',
    },
    {
        country: 'Toluca',
    },
    {
        country: 'Satélite',
    },
  ];

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: number,
            agency: 'Polanco',
            isSubmit: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

     handleChange(event) {
         this.setState({
             name: event.target.value,
             email: event.target.value,
             password: event.target.value,
             agency: event.target.value,
         });
    }

    handleSubmit(event) {
        this.setState({ isSubmit: true });
    }

    render() {
        const isSubmit = this.state.isSubmit;
        let view;

        if (isSubmit) {
            view = <Typography variant="body1" gutterBottom>
                Gracias por registrarte, en breve te contactaremos
                 </Typography>
        } else {
            view = <form onSubmit={this.handleSubmit}>
                <TextField
                        id="outlined-name"
                        label="Nombre"
                        type="text"
                        value={this.state.name}
                       onChange={this.handleChange}
                        autoComplete="current-name"
                        margin="normal"
                    />

                <TextField
                        id="outlined-email-input"
                        label="Email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        autoComplete="current-email"
                        margin="normal"
                    />

                <TextField
                        id="outlined-phone-input"
                        label="Teléfono"
                        type="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        autoComplete="current-phone"
                        margin="normal"
                    />

                <TextField
                        id="outlined-select-currency"
                        select
                        label="Agencia"
                        value={this.state.agency}
                        onChange={this.handleChange}
                        helperText="Por favor selecciona una agencia"
                        margin="normal"
                        variant="outlined"
                    >
                        {agency.map(option => (
                        <MenuItem key={option.country} value={option.country}>
                            {option.country}
                        </MenuItem>
                        ))}
                    </TextField>

                <input type="submit" value="Submit" onClick={this.handleSubmit} />
            </form>;
        }

        return (
            <div isSubmit={isSubmit}>
                {view}
            </div>
        );
    }
}
export default Form;
