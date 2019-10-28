import React, {Component} from 'react';
import MenuItem from "./MenuItem/MenuItem";
import './Menu.css';

class Menu extends Component {
    render() {
        return (
            <nav className="Menu">
                <MenuItem url="http://google.com">Google</MenuItem>
                <MenuItem url="http://amazon.com">Amazon</MenuItem>
                <MenuItem url="http://yahoo.com">Yahoo</MenuItem>
            </nav>
        );
    }
}

export default Menu;