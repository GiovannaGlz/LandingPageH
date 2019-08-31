import React, {Component} from 'react';
import { Container } from '@material-ui/core';
import Title from  './Title.js'
import Form from './Form.js'


class Panel1 extends Component {
  render () {
    return (

        <Container>
            <Title/>
             <Form/>
        </Container>
  )
}
}

export default Panel1;