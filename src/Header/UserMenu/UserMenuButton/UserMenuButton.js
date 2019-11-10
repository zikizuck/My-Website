import React, {Component} from 'react';
import './UserMenuButton.css';


class UserMenuButton extends Component {


    render() {

        return (
            <button className="UserMenuButton" >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png" alt=""/>
                
            </button>
        );
    }
}

export default UserMenuButton;