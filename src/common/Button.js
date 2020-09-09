import React, { Component } from 'react';

import '../assets/css/Button.css';

class Button extends Component{
    render(){
        return(
            <div className="Button">
                <a href="#">{this.props.ButtonText}</a>
            </div>
        );
    }
}

export default Button;