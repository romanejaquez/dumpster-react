import React, {useEffect} from 'react';
import './PlaylistContainer.scss';
import PlaylistHeader from '../PlaylistHeader/PlaylistHeader';
import PlaylistSearch from '../PlaylistSearch/PlaylistSearch';
import Playlist from '../Playlist/Playlist';
import Player from '../Player/Player';
import {useDispatch} from 'react-redux';
import playlistActions from './../../actions/playlistActions';

const PlaylistContainer = () => {

    const dispatch = useDispatch();

    async function fetchData() {
        const res = await fetch("http://streaming.drcoderz.com/files.php");
        res
            .json()
            .then(res => dispatch(playlistActions.addPlaylists(res)))
            .catch(err => dispatch(playlistActions.addPlaylistError(err)));
    }

    useEffect(() => {
        fetchData();
    });

    return (
        <>
        <div className="d-playlist-header-wrapper">
            <PlaylistHeader />
            {/* <PlaylistSearch /> */}
        </div>
        <Playlist />
        <Player />
        </>
    );
};

export default PlaylistContainer;