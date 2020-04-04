import React from 'react';
import './PlaylistItem.scss';
import {useSelector, useDispatch} from 'react-redux';
import playlistItemActions from './../../actions/playlistItemActions';

const PlaylistItem = ({ song }) => {

    const dispatch = useDispatch();

    return (
        <div className="d-playlist-item" onClick={() => dispatch(playlistItemActions.selectSong(song))}>
            <div className="d-playlist-item-left">
                <div className="d-playlist-item-name-wrapper">
                    <span className="d-playlist-item-icon material-icons">audiotrack</span>
                    <span className="d-playlist-item-name" dangerouslySetInnerHTML={{__html: song.Name}}></span>
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