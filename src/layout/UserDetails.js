import React, { Component } from 'react';

import '../assets/css/UserDetails.css';
import AddButton from '../common/AddButton';

import $ from 'jquery';

class UserDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }
    
    onChangeValue = event => {
        this.setState({ value: event.target.value });
    };
     
    onAddItem = () => {
        this.setState(state => {
        const list = state.list.concat(state.value);
     
        return {
                list,
                value: '',
            };
        });
    };

    async componentDidMount(){

        //Showing/Hiding user details popup
        const user_details_overlay = $(".UserDetailsOverlay");
        const add_user_btn = $(".AddButton button");
        const close_overlay_btn = $(".CloseBtn");

        add_user_btn.click(function(){
            user_details_overlay.fadeIn().css("display", "flex");
        });

        close_overlay_btn.click(function(){
            user_details_overlay.fadeOut();
        });

        $(".AddUserBtn").click(function(){
            user_details_overlay.fadeOut();
        });
    }

    render(){
        return(
            <div className="UserDetails">
                <div className="UserDetailsOverlay">
                    <div className="UserDetailsPopup">
                        <header className="UserDetailsPopupHeader">
                            <p>İstifadəçi məlumatları</p>
                            <button className="CloseBtn">
                                <img src={require('../assets/images/close.svg')}/>
                            </button>
                        </header>
                        <form>
                            <label>S.A.A</label><br/>
                            <input 
                            value={this.state.value}
                            onChange={this.onChangeValue}
                            type="text" 
                            placeholder="Məmmədov Kamran Zaur oğlu"/><br/>
                            <label>FİN Kod</label><br/>
                            <input type="text" placeholder="67Z2TRZ"/><br/>
                            <label>Email</label><br/>
                            <input type="email" placeholder="kamranzmammadov@gmail.com"/><br/>
                            <label>Kod sözü</label><br/>
                            <input type="text" placeholder="progbash"/><br/>
                            <label>Mobil nömrə</label><br/>
                            <input type="text" placeholder="+994554371570"/><br/>
                            <input type="checkbox" /><label>SMS OTP</label><br/>
                            <button
                                className="AddUserBtn"
                                type="button"
                                onClick={this.onAddItem}
                                disabled={!this.state.value}>Əlavə Et</button>
                        </form>
                    </div>
                </div>

                <p>İstifadəçilər</p>
                <ul>
                    {(this.state.list || []).map(user => (
                        <li key={user}>{user}</li>
                    ))}
                </ul>
                <AddButton AddButtonText="+"/>
            </div>
        );
    }
}

export default UserDetails;