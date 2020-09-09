import React, { Component } from 'react';

import '../assets/css/Footer.css';

class Footer extends Component{
    render(){
        return(
            <div className="Footer">
                <div className="FooterRights">
                    <img src={require('../assets/images/atb_main_logo.svg')}/>
                    <p>AR Mərkəzi Bankı tərəfindən "Azər-Türk Bank" ASC-yə <br/> 29.06.1995-ci il tarixində 234№-li lisenziya verilib</p>
                    <p>© 2002-2020 Azər-Türk Bank</p>
                </div>
                <div className="FooterContact">
                    <p>BİZİMLƏ ƏLAQƏ</p>
                    <p><a href="tel: +99412945">+994 12 945</a> Azərbaycan daxilində zəng edin</p>
                    <p><a href="tel: +99412945">+994 12 945</a> Xaricdən gələn zənglər üçün</p>
                </div>
                <div className="FooterSocial">
                    <p>BİZİ İZLƏYİN</p>
                    <p>Xəbərlərimizdən ilk olaraq Siz xəbərdar olun!</p>
                    <div>
                        <a href="#"><img src={require('../assets/images/fb.png')}/></a>
                        <a href="#"><img src={require('../assets/images/inst.png')}/></a>
                        <a href="#"><img src={require('../assets/images/ln.png')}/></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;