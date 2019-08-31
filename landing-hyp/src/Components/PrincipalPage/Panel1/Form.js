import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import { FormControl } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
  
  const agencies = [
    {
        country: 'Polanco',
    },
    {
        country: 'Satélite',
    },
    {
        country: 'Pedregal',
    },
    {
        country: 'Toluca',
    },
  ];

class Form extends Component{
    constructor(props) {
        super(props);
            this.state = {
                name: '',
                email: '',
                password: '',
                phone: 0,
                agency: '',
            };
    
        this.handleChange = this.handleChange.bind(this);
        
      }

      componentDidMount(){
          this.setState(
              {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                phone: this.state.phone,
                agency: this.state.agency,  
              }
          )
      }
    
      handleChange(event) {
        ;
      }

    render(){
          
        return(
            
            <FormGroup>
                    <FormControl>
                    
                        <TextField
                            id="filled-name-input"
                            label="Nombre Completo"
                            className="Name"
                            type="name"
                            name="name"
                            autoComplete="name"
                            value={this.setState.name} 
                            onChange={this.handleChange(this.setState.name)}
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
                            value={this.setState.email} 
                            onChange={this.handleChange(this.setState.email)}
                            margin="normal"
                            variant="filled"
                        />

                        <TextField required
                            id="filled-password-input"
                            label="Contraseña"
                            className="Password"
                            type="password"
                            autoComplete="current-password"
                            value={this.setState.password} 
                            onChange={this.handleChange(this.setState.password)}
                            margin="normal"
                            variant="filled"
                        />

                        <TextField
                            id="filled-number"
                            label="Teléfono"
                            value={this.setState.phone} 
                            onChange={this.handleChange(this.setState.phone)}
                            margin="normal"
                            variant="filled"
                        />

                        <TextField
                        id="standard-select-currency-native"
                        select
                        label="Agencia"
                        className="select"
                        value={this.setState.agency}
                        onChange={this.handleChange(this.setState.agency)}
                        
                        helperText="Selecciona tu agencia"
                        margin="normal"
                        >
                        {agencies.map(option => (
                            <option key={option.country} value={option.country}>
                            {option.country}
                            </option>
                        ))}
                        </TextField>

                         <FormControlLabel
                            control={
                            <Checkbox
                                checked="true"
                                value="checked"
                                color="primary"
                            />
                            }
                            label="Acepto términos y condiciones en infiniti.mx"
                        />

                        <Button variant="outlined" color="primary" className="button">  
                            REGÍSTRATE
                        </Button>

                    </FormControl>
                </FormGroup>
                
            )
        }
    }

export default Form;