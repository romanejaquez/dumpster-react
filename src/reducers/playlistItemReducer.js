const initialState = {
    currentSongPlaying: null,
    selectedPlaylist: '',
    myPlaylists: [],
    allPlaylists: []
}

const playlistReducer = (state = initialState, action) => {

    switch(action.type) {
        case "ADD_PLAYLISTS":
            return {
                ...state,
                allPlaylists: action.payload
            }
        case "SELECTED_PLAYLIST":
            return {
                ...state,
                selectedPlaylist: action.payload
            }
        case "SELECT_SONG": 
            return {
                ...state,
                currentSongPlaying: action.payload
            };
        case "UNSELECT_SONG":
            return {
                ...state,
                currentSongPlaying: null
            };
        case "FAVORITE_SONG":
            return {
                ...state,
                song: action.payload
            };
        case "UNFAVORITE_SONG":
            return {
                ...state,
                song: action.payload
            };
        default:
            return state;
    }
};

export default playlistReducer;