import React, {Component} from 'react';
import './SidebarItem.css';

class SidebarItem extends Component {
    render() {
        return (
            <li>
                <a href={this.props.url} className="SidebarItem">
                    {this.props.children}
                </a>

            </li>
        );
    }
}

export default SidebarItem;