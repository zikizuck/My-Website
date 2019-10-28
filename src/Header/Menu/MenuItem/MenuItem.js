import React, {Component} from 'react';
import './MenuItem.css';


class MenuItem extends Component {
    render() {
        return (
            <a href={this.props.url} className="MenuItem">
                {this.props.children}
            </a>
        );
    }
}

export default MenuItem;