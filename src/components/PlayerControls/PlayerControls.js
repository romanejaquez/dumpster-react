import React, { useEffect } from 'react';
import './PlayerControls.scss';
import { useSelector, useDispatch } from 'react-redux';
import playerActions from './../../actions/playerActions';

const PlayerControls = ({ play, pause, mute, unmute }) => {
    const isPlaying = useSelector(state => state.player.isPlaying);
    const isMute = useSelector(state => state.player.isMute);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isPlaying) {
            dispatch(playerActions.play());
        }
    }, []);

    return (
        <div className="d-player-controls">
                <span onClick={() => dispatch(playerActions.prev())} className="d-player-control d-player-control-md material-icons">skip_previous</span>
                <span onClick={() => {
                        if (!isPlaying) {
                            dispatch(playerActions.play());
                            play();
                        } else {
                            dispatch(playerActions.pause());
                            pause();
                        }
                    }
                } className="d-player-control d-player-control-lg material-icons">
                    {!isPlaying ? 'play_arrow' : 'pause'} 
                </span>
                <span onClick={() => dispatch(playerActions.next())} className="d-player-control d-player-control-md material-icons">skip_next</span>
                <span onClick={() => {
                            if (!isMute) {
                                dispatch(playerActions.mute());
                                mute();
                            } else {
                                dispatch(playerActions.unmute());
                                unmute();
                        }
                    }
                } className="d-player-control d-player-control-sm material-icons">
                    {isMute ? 'volume_off' : 'volume_up'}
                </span>
            </div>
    )
}

export default PlayerControls;