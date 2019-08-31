import React, { Component } from 'react';
import {Divider, TextField, FormGroup, FormControlLabel, Checkbox, MenuItem, Input} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { number } from 'prop-types';
import '../../../Resources/style.css'


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
            view = 
            <div>
                <Divider variant='inset'/>
                    <p>
                        Gracias por registrarte, en breve te contactaremos
                        </p>
                 </div>
        } else {
            view = <FormGroup onSubmit={this.handleSubmit}>

<ThemeProvider>
                <TextField
                        label="NOMBRE COMPLETO"
                        type="text"
                        value={this.state.name}
                       onChange={this.handleChange}
                        autoComplete="current-name"
                        margin="normal"
                        id="mui-theme-provider-outlined-input"
                    />

                <TextField
                        label="EMAIL"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        autoComplete="current-email"
                        margin="normal"
                        id="mui-theme-provider-outlined-input"
                    />

                <TextField                        
                        label="TELÉFONO"
                        type="tel"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        autoComplete="current-phone"
                        id="mui-theme-provider-outlined-input"
                    />

                <TextField                        
                        select
                        label="AGENCIA"
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

                    <FormControlLabel
                        control={
                        <Checkbox
                            value="checked"
                            color="primary"
                        />
                        }
                        label="Acepto términos y condiciones en infiniti.mx"
                    />

                <Input 
                    type="submit" 
                    value="Registrarse" 
                    onClick={this.handleSubmit} 
                />
            </ThemeProvider>
        </FormGroup>;
        }

        return (
            <div isSubmit={isSubmit}>
                {view}
            </div>
        );
    }
}
export default Form;
