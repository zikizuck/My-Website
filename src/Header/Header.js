import React from 'react';
import './Header.css';
import Menu from "./Menu/Menu";
class Header extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <header className="Header">
                <h1>My Website !</h1>
                <Menu/>

            </header>
        );
    }
}

export default Header;