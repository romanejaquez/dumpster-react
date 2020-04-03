import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import playlistItemReducer from './playlistItemReducer';
import drawerReducer from './drawerReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
    showDrawer: drawerReducer,
    player: playerReducer,
    playlist: playlistItemReducer,
    loading: loadingReducer
});

export default rootReducer;