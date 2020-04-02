import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import playlistItemReducer from './playlistItemReducer';

const rootReducer = combineReducers({
    player: playerReducer,
    playlist: playlistItemReducer
});

export default rootReducer;