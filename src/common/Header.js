import React, { Component } from 'react';

import '../assets/css/Header.css';

class Header extends Component{
    render(){
        return(
            <div className="Header">
                <div className="HeaderLogoContainer">
                    <img src={require('../assets/images/atb-logo.png')}/>
                </div>
                <div className="LangSelectionContainer">
                    <select>
                        <option>AZ</option>
                        <option>RU</option>
                        <option>ENG</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Header;