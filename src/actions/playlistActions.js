const addPlaylists = (allPlaylists) => {
    return {
        type: "ADD_PLAYLISTS",
        payload: allPlaylists
    }
};

const selectPlaylist = (playlistId) => {
    return {
        type: "SELECTED_PLAYLIST",
        payload: playlistId
    }
};

const addPlaylistError = (error) => {
    return {
        type: "PLAYLIST_ERROR",
        payload: error
    }
}

export default {
    addPlaylists,
    addPlaylistError,
    selectPlaylist
}