import React, {Component} from 'react';
import desktop from '../../../Resources/img/desktop.png'

class Panel2 extends Component {
  render () {
    return (
        <div>
            <img src={desktop} className="desktop-img" alt="desktop" />
        </div>
        
    )
    }
}

export default Panel2;