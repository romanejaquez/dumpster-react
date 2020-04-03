import React from 'react';
import './PlaylistRow.scss';
import {useDispatch, useSelector} from 'react-redux';
import playlistActions from './../../actions/playlistActions';
import drawerActions from './../../actions/drawerActions';

const PlaylistRow = ({playlistInfo}) => {
    const numOfSongs = playlistInfo.Songs ? playlistInfo.Songs.length : 0;
    const currentPlaylistSelected = useSelector(state => state.playlist.selectedPlaylist);
    const currentPlaylistStyle = currentPlaylistSelected === playlistInfo.Id ? 'current-playlist' : '';
    const dispatch = useDispatch();

    return (
        <div className={currentPlaylistStyle + " d-playlist-info-row"} onClick={() => {
            dispatch(playlistActions.selectPlaylist(playlistInfo.Id));
            dispatch(drawerActions.toggleDrawer(false));
        }}>
            <div className="d-playlist-info-row-wrapper">
                <div className="d-playlist-info-num">{numOfSongs}</div>
                <div dangerouslySetInnerHTML={{__html: playlistInfo.FolderName}}></div>
            </div>
        </div>
    );
}

export default PlaylistRow;