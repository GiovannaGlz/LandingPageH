import React, {Component} from 'react'
import logo from '../../Resources/img/logo.png'
import '../../Resources/style.css'

class Header extends Component{
    render(){
        return(
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                
            </header>
        )
    }
}

export default Header;