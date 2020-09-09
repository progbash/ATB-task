import React, { Component } from 'react';

import '../assets/css/Application.css';
import '../assets/css/CustomizeStep.css';
import ClientDetails from '../layout/ClientDetails';
import UserDetails from '../layout/UserDetails';

import MultiStep from '../../node_modules/react-multistep';

const prevStyle = {
    'background': 'transparent',
    'border-radius': '5px',
    'height': '30px',
    'width': '150px',
    'display': 'block',
    'text-decoration': 'none',
    'color': 'black',
    'line-height': '30px',
    'border': '1px solid black',
    'cursor':'pointer',
    'margin-top': '10px',
    'outline': 'none'};

const nextStyle = {
    'background': '#FFD217',
    'border-radius': '5px',
    'height': '30px',
    'width': '150px',
    'display': 'block',
    'text-decoration': 'none',
    'color': 'black',
    'line-height': '30px',
    'border': '1px solid transparent',
    'cursor':'pointer',
    'margin-top': '10px',
    'outline': 'none'};

const steps = [
    { name: 'Müştəri məlumatları', component: <ClientDetails /> },
    { name: 'İstifadəçi məlumatları', component: <UserDetails /> }
]

class Application extends Component{
    render(){
        return(
            <div className="Application">
                <h1>ƏRİZƏ</h1>
                <p>İnternet Bankçılıq xidmətinə qoşulma</p>
                <MultiStep steps={steps} prevStyle={prevStyle} nextStyle={nextStyle}/>
            </div>
        );
    }
}

export default Application;