import React, {Component} from 'react';
import Header from './Components/Header-Footer/Header';
import Form from './Components/PrincipalPage/Form.js'


class App extends Component {
  render () {
    return (
      <div className='App'>
      <Header/>
      <Form/>
    </div>
  )
}
}

export default App
