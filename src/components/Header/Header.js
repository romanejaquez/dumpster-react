import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <div className="d-header">
            <div className="d-header-left-side">
                <span className="d-header-menu-icon material-icons">menu</span>
                <span className="d-header-logo"></span>
            </div>
            <div className="d-header-right-side">
                <span className="d-header-menu-icon material-icons">notifications</span>
            </div>
        </div>
    );
}

export default Header;