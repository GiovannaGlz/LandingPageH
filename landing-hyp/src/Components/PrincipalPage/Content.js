import React, {Component} from 'react';
import { Container } from '@material-ui/core';
import Panel1 from './Panel1/Panel1.js';
import Panel2 from './Panel2/Panel2.js';
import '../../Resources/style.css'


class Content extends Component { 
  render () {
    
    return (

        <Container maxWidth="sm">
            <Panel1/>
             <Panel2/>
        </Container>
  )
}
}

export default Content;