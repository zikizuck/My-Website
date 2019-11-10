import React, {Component} from 'react';
import UserMenuItem from "./UserMenuItem/UserMenuItem";
import UserMenuButton from "./UserMenuButton/UserMenuButton";
import './UserMenu.css';


class UserMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            button : false
        }
    }

    buttonSwitch(){
        this.setState( {
            button :!this.state.button
        })

    }

    render() {
        const cls = this.state.button ? '' : 'Expand-button';


        return (
            <div className="UserMenu">
                <div onClick={this.buttonSwitch.bind(this)}>
                    <UserMenuButton />
                </div>
                <div className={cls}>
                    <ul className="UserMenu-list ">
                        <UserMenuItem url="#">Link 1</UserMenuItem>
                        <UserMenuItem url="#">Link 2</UserMenuItem>
                        <UserMenuItem url="#">Link 3</UserMenuItem>

                    </ul>
                </div>
            </div>
        );
    }
}

export default UserMenu;