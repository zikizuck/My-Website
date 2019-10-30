import React, {Component} from 'react';
import './Sidebar.css';
import SidebarItem from "./SidebarItem/SidebarItem";

class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar" >
                <p>Side Bar</p>
                <ul>
                    <SidebarItem  url="#">Home</SidebarItem>
                    <SidebarItem  url="#">About Us</SidebarItem>
                    <SidebarItem  url="#">Products</SidebarItem>
                    <SidebarItem  url="#">News</SidebarItem>
                    <SidebarItem  url="#">Contact Us</SidebarItem>

                </ul>

            </div>
        );
    }
}

export default Sidebar;