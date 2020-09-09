import React, { Component } from 'react';

import '../assets/css/AddButton.css';


class AddButton extends Component{
    render(){
        return(
            <div className="AddButton">
                <button>{this.props.AddButtonText}</button>
            </div>
        );
    }
}

export default AddButton;