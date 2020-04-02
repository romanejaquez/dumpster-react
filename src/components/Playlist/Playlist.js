import React from 'react';
import './Playlist.scss';
import PlaylistItem from '../PlaylistItem/PlaylistItem';

const Playlist = ({ playlist }) => {
    return (
        <div className="d-playlist">
            {playlist.Songs ? playlist.Songs.map((s) => <PlaylistItem key={s.Id} song={s}/> ) : null}
        </div>
    );
}

export default Playlist;