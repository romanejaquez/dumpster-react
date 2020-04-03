import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import playlistItemReducer from './playlistItemReducer';
import drawerReducer from './drawerReducer';

const rootReducer = combineReducers({
    showDrawer: drawerReducer,
    player: playerReducer,
    playlist: playlistItemReducer
});

export default rootReducer;