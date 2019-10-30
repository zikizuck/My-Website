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
                <form action="search.html" className="search-form"><label><span>Search:</span><input name="search"
                                                                                                     className="input"
                                                                                                     placeholder="Search..."/></label>
                    <button type="submit">
                        <img src="search.png" alt="search"/>
                    </button>
                </form>
                <Menu/>

            </header>
        );
    }
}

export default Header;