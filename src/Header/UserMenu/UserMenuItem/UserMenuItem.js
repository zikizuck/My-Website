import React, {Component} from 'react';
import './UserMenuItem.css';

class UserMenuItem extends Component {
    render() {
        return (


                   <li  className="UserMenuItem" >
                       <a href={this.props.url} > {this.props.children} </a>
                   </li>

        );
    }
}

export default UserMenuItem;