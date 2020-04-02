import React from 'react';
import './PlaylistItem.scss';
import {useSelector, useDispatch} from 'react-redux';
import playlistItemActions from './../../actions/playlistItemActions';

const PlaylistItem = () => {

    const dispatch = useDispatch();

    return (
        <div className="d-playlist-item" onClick={() => dispatch(playlistItemActions.selectSong({}))}>
            <div className="d-playlist-item-left">
                <div className="d-playlist-item-name-wrapper">
                    <span className="d-playlist-item-icon material-icons">audiotrack</span>
                    <span className="d-playlist-item-name">Name of Song Here</span>
                </div>
                <div className="d-playlist-item-time">00:00</div>
            </div>
            <div className="d-playlist-item-right">
                <span className="d-playlist-item-favorite material-icons">favorite_border</span>
            </div>
        </div>
    );
}

export default PlaylistItem;