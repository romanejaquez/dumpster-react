import React from 'react';
import './Player.scss';
import {useSelector, useDispatch} from 'react-redux';
import playerActions from './../../actions/playerActions';

const Player = () => {
    const isPlaying = useSelector(state => state.player.isPlaying);
    const isMute = useSelector(state => state.player.isMute);
    const currentSong = useSelector(state => state.playlist.currentSongPlaying);
    const dispatch = useDispatch();

    const playSong = () => {
        if (currentSong) {
            document.getElementById('audioPlayer').play();
        }
    }

    const pauseSong = () => {
        if (currentSong) {
            document.getElementById('audioPlayer').pause();
        }
    }

    return (
        <div className="d-main-player">
            {currentSong ? 
                <div className="d-player-song-wrapper">
                    <div className="d-player-current-song">
                        <span className="d-player-audio-anim"></span>
                        <div className="marquee">
                            <div>
                                <span dangerouslySetInnerHTML={{__html: currentSong.Name}}></span>
                                <span dangerouslySetInnerHTML={{__html: currentSong.Name}}></span>
                                <span dangerouslySetInnerHTML={{__html: currentSong.Name}}></span>
                            </div>
                        </div>
                    </div>
                    <div className="d-player-scrub">
                        <input type="range" min="0" max="100"/>
                    </div>
                    <audio id="audioPlayer" src={currentSong.Path} autoPlay />
                </div>
                : null}
            <div className="d-player-controls">
                <span onClick={() => dispatch(playerActions.prev())} className="d-player-control d-player-control-md material-icons">skip_previous</span>
                <span onClick={() => {
                        if (!isPlaying) {
                            dispatch(playerActions.play());
                            playSong();
                        } else {
                            dispatch(playerActions.pause());
                            pauseSong();
                        }
                    }
                } className="d-player-control d-player-control-lg material-icons">
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