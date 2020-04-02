import React from 'react';
import './PlaylistHeader.scss';

const PlaylistHeader = () => {
    return (
        <div className="d-playlist-header">
            <div className="d-playlist-header-name-container">
                <span className="d-playlist-header-icon material-icons">queue_music</span>
                <span className="d-playlist-header-name">Playlist Header</span>
            </div>
            <div className="d-playlist-header-songs-label">
                <span>89 songs</span>
            </div>
        </div>
    );
};

export default PlaylistHeader;