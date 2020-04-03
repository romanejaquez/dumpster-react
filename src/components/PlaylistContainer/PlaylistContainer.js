import React, {useEffect} from 'react';
import './PlaylistContainer.scss';
import PlaylistHeader from '../PlaylistHeader/PlaylistHeader';
import PlaylistSearch from '../PlaylistSearch/PlaylistSearch';
import Playlist from '../Playlist/Playlist';
import Player from '../Player/Player';
import {useSelector, useDispatch} from 'react-redux';
import playlistActions from './../../actions/playlistActions';
import loadingActions from './../../actions/loadingActions';

const PlaylistContainer = () => {

    const playlist = useSelector(state => {

        if (!state.playlist.selectedPlaylist) {
        return state.playlist.allPlaylists.length > 0 ? 
            state.playlist.allPlaylists[0] : {};
        }
        else {
            return state.playlist.allPlaylists.find(p => p.Id === state.playlist.selectedPlaylist)
        }
    });

    const dispatch = useDispatch();

    async function fetchData() {
        
        dispatch(loadingActions.showLoading(true));
        const res = await fetch("http://streaming.drcoderz.com/files.php");
        res
            .json()
            .then(res => {
                dispatch(playlistActions.addPlaylists(res));
                dispatch(loadingActions.showLoading(false));
            })
            .catch(err => {
                dispatch(playlistActions.addPlaylistError(err));
                dispatch(loadingActions.showLoading(false));
            });
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