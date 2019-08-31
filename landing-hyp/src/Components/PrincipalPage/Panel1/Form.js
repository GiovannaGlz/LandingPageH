import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';

class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        isLoggedIn: false,
    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        this.setState({isLoggedIn: true});
    }
  
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let view;

        if (isLoggedIn) {
           view = <Typography variant="body1" gutterBottom>
                    Gracias por registrarte, en breve te contactaremos
                 </Typography>
          } else {
            view = <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                            </label>
                            <input type="submit" value="Submit" onClick={this.handleSubmit}/>
                    </form>;
          }

    return (
        <div isLoggedIn={isLoggedIn}>
            {view}
            </div>
            );
            }
        }
    export default Form;
