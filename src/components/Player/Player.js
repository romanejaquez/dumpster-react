import React from 'react';
import './Player.scss';
import {useSelector, useDispatch} from 'react-redux';
import playerActions from './../../actions/playerActions';

const Player = () => {
    const isPlaying = useSelector(state => state.player.isPlaying);
    const isMute = useSelector(state => state.player.isMute);

    const dispatch = useDispatch();
    
    return (
        <div className="d-main-player">
            <div className="d-player-controls">
                <span onClick={() => dispatch(playerActions.prev())} className="d-player-control d-player-control-md material-icons">skip_previous</span>
                <span onClick={() => !isPlaying ? dispatch(playerActions.play()) : dispatch(playerActions.pause())} className="d-player-control d-player-control-lg material-icons">
                    {!isPlaying ? 'play_arrow' : 'pause'} 
                </span>
                <span onClick={() => dispatch(playerActions.next())} className="d-player-control d-player-control-md material-icons">skip_next</span>
                <span onClick={() => !isMute ? dispatch(playerActions.mute()) : dispatch(playerActions.unmute())} className="d-player-control d-player-control-sm material-icons">
                    {isMute ? 'volume_off' : 'volume_up'}
                </span>
            </div>
        </div>
    );
}

export default Player;