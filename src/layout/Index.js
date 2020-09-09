import React, { Component } from 'react';

import '../assets/css/Common.css';
import '../assets/css/Index.css';
import '../assets/css/Responsive.css';

import Header from '../common/Header';
import Application from '../common/Application';
import Footer from '../common/Footer';

class Index extends Component{
    render(){
        return(
            <div className="CustomContainer">
                <Header />
                <Application />
                <Footer />
            </div>
        );
    }
}

export default Index;