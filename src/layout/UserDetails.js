import React, { Component } from 'react';

import '../assets/css/UserDetails.css';
import AddButton from '../common/AddButton';

import $ from 'jquery';

class UserDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInput: '',
            list: []
        }
    }

    changeUserInput(input){
        this.setState({
                userInput: input
            }
        );
    }

    addToUserList(e, input){
        e.preventDefault();
        let listArray = this.state.list;
        listArray.push(input);
        this.setState({
            list: listArray
        });
    }

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
    }
    render(){
        console.log(this.state.user_list);
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
                            onChange={(e)=>this.changeUserInput(e.target.value)}
                            value={this.state.userInput} 
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
                            <input type="checkbox" /><label>SMS OTP</label>
                            <AddButton className="AddUser" AddButtonText="Əlavə Et"/>
                        </form>
                    </div>
                </div>

                <p>İstifadəçilər</p>
                <ul>
                    {this.state.list.map((user)=><li>{user}</li>)}
                </ul>
                <AddButton AddButtonText="+"/>
            </div>
        );
    }
}

export default UserDetails;