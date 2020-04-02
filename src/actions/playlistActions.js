const addPlaylists = (allPlaylists) => {
    return {
        type: "ADD_PLAYLISTS",
        payload: allPlaylists
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
    addPlaylistError
}