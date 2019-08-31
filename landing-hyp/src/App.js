import React, {Component} from 'react';
import Header from './Components/Header-Footer/Header';
import Content from './Components/PrincipalPage/Content.js';
import './Resources/style.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
      <Header/>
      <Content/>
    </div>
  )
}
}

export default App
