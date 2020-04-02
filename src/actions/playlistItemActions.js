const selectSong = (song) => {
    return {
        type: "SELECT_SONG",
        payload: song
    }
};

const unselectSong = (song) => {
    return {
        type: "UNSELECT_SONG",
    }
};

const favoriteSong = (song) => {
    return {
        type: "FAVORITE_SONG",
        payload: song
    }
};

const unfavoriteSong = (song) => {
    return {
        type: "UNFAVORITE_SONG",
        payload: song
    }
}

export default {
    selectSong,
    unselectSong,
    favoriteSong,
    unfavoriteSong
}