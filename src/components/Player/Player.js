import React, { useState, useEffect } from 'react';
import './Player.scss';
import {useSelector} from 'react-redux';
import PlayerControls from '../PlayerControls/PlayerControls';

const Player = () => {
    const currentSong = useSelector(state => state.playlist.currentSongPlaying);
    const [audioValue, setAudioValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);

    useEffect(() => {

        if (currentSong) {
            document.getElementById('audioPlayer').addEventListener('timeupdate', () => {
                setAudioValue(document.getElementById('audioPlayer').currentTime);
                console.log(document.getElementById('audioPlayer').currentTime);
            });

            document.getElementById('audioPlayer').addEventListener('play', () => {
                setMaxValue(document.getElementById('audioPlayer').duration);
            });
        }

        return () => {
            if (currentSong) {
                document.getElementById('audioPlayer').removeEventListener('timeupdate', null);
                document.getElementById('audioPlayer').removeEventListener('play', null);
            }
        }
    }, [currentSong]);

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

    const muteSong = () => {
        if (currentSong) {
            document.getElementById('audioPlayer').muted = true;
        }
    }

    const unmuteSong = () => {
        if (currentSong) {
            document.getElementById('audioPlayer').muted = false;
        }
    }

    return (currentSong ?
        <div className="d-main-player">
            <div className="d-player-song-wrapper">
                <div className="d-player-current-song-wrapper">
                    <span className="d-player-audio-anim"></span>
                    <span className="d-player-current-song" dangerouslySetInnerHTML={{__html: currentSong.Name}}></span>
                </div>
                <div className="d-player-scrub">
                    <input type="range" min="0" max={maxValue} defaultValue={audioValue}/>
                </div>
                <audio id="audioPlayer" src={currentSong.Path} autoPlay />
            </div>
            <PlayerControls play={playSong} pause={pauseSong} mute={muteSong} unmute={unmuteSong} />
        </div>
    : null);
}

export default Player;