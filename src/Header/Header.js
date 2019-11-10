import React from 'react';
import './Header.css';
import Menu from "./Menu/Menu";
import UserMenu from "./UserMenu/UserMenu";
import UserMenuButton from "./UserMenu/UserMenuButton/UserMenuButton";
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
                        <img src="https://listimg.pinclipart.com/picdir/s/93-937805_bobcat-footprint-clipart-search-icon-svg-white-png.png" alt="search"/>


                    </button>
                </form>
                <Menu/>
                <UserMenu>

                </UserMenu>

            </header>
        );
    }
}

export default Header;