import React from 'react';
import './MainContent.scss';

const MainContent = (props) => {
    return (
        <div className="d-main-content">
            {props.children}
        </div>
    );
};

export default MainContent;