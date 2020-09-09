import React, { Component } from 'react';

import '../assets/css/Application.css';
import '../assets/css/CustomizeStep.css';
import ClientDetails from '../layout/ClientDetails';
import UserDetails from '../layout/UserDetails';

import MultiStep from '../../node_modules/react-multistep';

import $ from "jquery";

const prevStyle = {
    'background': 'transparent',
    'borderRadius': '5px',
    'height': '30px',
    'width': '150px',
    'display': 'block',
    'textDecoration': 'none',
    'color': 'black',
    'lineHeight': '30px',
    'border': '1px solid black',
    'cursor':'pointer',
    'marginTop': '30px',
    'outline': 'none'};

const nextStyle = {
    'background': '#FFD217',
    'borderRadius': '5px',
    'height': '30px',
    'width': '150px',
    'display': 'block',
    'textDecoration': 'none',
    'color': 'black',
    'lineHeight': '30px',
    'border': '1px solid transparent',
    'cursor':'pointer',
    'marginTop': '30px',
    'outline': 'none'};

const steps = [
    { name: 'Müştəri məlumatları', component: <ClientDetails /> },
    { name: 'İstifadəçi məlumatları', component: <UserDetails /> }
]

class Application extends Component{
    componentDidMount(){
        $(".go2478912419 span").html("MÜŞTƏRİ");
        $(".go2067797667 span").html("İSTİFADƏÇİ")
    }
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