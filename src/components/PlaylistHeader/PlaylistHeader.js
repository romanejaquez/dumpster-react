import React from 'react';
import './PlaylistHeader.scss';

const PlaylistHeader = ({ playlist }) => {
    const numOfSongs = playlist.Songs ? playlist.Songs.length : 0;

    return (
        <div className="d-playlist-header">
            <div className="d-playlist-header-name-container">
                <span className="d-playlist-header-icon material-icons">queue_music</span>
                <span className="d-playlist-header-name">{playlist.FolderName}</span>
            </div>
            <div className="d-playlist-header-songs-label">
                <span>{numOfSongs} songs</span>
            </div>
        </div>
    );
};

export default PlaylistHeader;