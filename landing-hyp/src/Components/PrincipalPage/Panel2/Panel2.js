import React, {Component} from 'react';
import desktop from '../../../Resources/img/desktop.png'
import '../../../Resources/style.css'


class Panel2 extends Component {
  render () {
    return (
    <div>
        <img src={desktop} style={{width:'100%'}} className="desktop-img" alt="desktop"/>
        </div>
    )
    }
}

export default Panel2;