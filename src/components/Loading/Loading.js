import React from 'react';
import './Loading.scss';

const Loading = () => {
    return (
        <div className="app-loading">
            <div className="app-loading-center">
                <div className="app-dumpster-icon"></div>
                <div className="app-loading-icon"></div>
            </div>
        </div>
    );
}

export default Loading;