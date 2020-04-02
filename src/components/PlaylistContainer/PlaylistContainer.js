import React, {useEffect} from 'react';
import './PlaylistContainer.scss';
import PlaylistHeader from '../PlaylistHeader/PlaylistHeader';
import PlaylistSearch from '../PlaylistSearch/PlaylistSearch';
import Playlist from '../Playlist/Playlist';
import Player from '../Player/Player';
import {useSelector, useDispatch} from 'react-redux';
import playlistActions from './../../actions/playlistActions';

const PlaylistContainer = () => {

    const playlist = useSelector(state => {
        return state.playlist.allPlaylists.length > 0 ? 
            state.playlist.allPlaylists[0] : {}
    });

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
    },[]);

    return (
        <>
        <div className="d-playlist-header-wrapper">
            <PlaylistHeader playlist={playlist} />
            {/* <PlaylistSearch /> */}
        </div>
        <Playlist playlist={playlist}/>
        <Player />
        </>
    );
};

export default PlaylistContainer;