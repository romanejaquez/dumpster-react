import React from 'react';
import './Header.scss';
import {useDispatch} from 'react-redux';
import drawerActions from './../../actions/drawerActions';

const Header = () => {

    const dispatch = useDispatch();

    return (
        <div className="d-header">
            <div className="d-header-left-side">
                <span onClick={() => dispatch(drawerActions.toggleDrawer(true))} className="d-header-menu-icon d-header-waffle material-icons">menu</span>
                <span className="d-header-logo"></span>
            </div>
            <div className="d-header-right-side">
                <span className="d-header-menu-icon material-icons">notifications</span>
            </div>
        </div>
    );
}

export default Header;