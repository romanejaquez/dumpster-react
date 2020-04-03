import React from 'react';
import './SideNav.scss';
import {useSelector} from 'react-redux';
import PlaylistRow from '../PlaylistRow/PlaylistRow';

const SideNav = () => {

    const playlist = useSelector(state => state.playlist.allPlaylists);
    return (
        <aside className="d-side-nav">
            <div className="d-side-nav-header">
                <span className="d-playlist-header-icon material-icons">queue_music</span>
                <span>All Playlists</span>
            </div>
            <div className="d-side-nav-playlists">
                {playlist.map((p) => <PlaylistRow key={p.Id} playlistInfo={p} />)}
            </div>
        </aside>
    );
};

export default SideNav;