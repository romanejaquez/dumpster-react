const initState = {
    isPlaying: false,
    isMute: false
};

const playerReducer = (state = initState, action) => {
    switch(action.type) {
        case "PLAYER_PLAY":
            return {
                ...state,
                isPlaying: true
            };
        case "PLAYER_PAUSE":
            return {
                ...state,
                isPlaying: false
            };
        case "PLAYER_MUTE":
            return {
                ...state,
                isMute: true
            };
        case "PLAYER_UNMUTE":
            return {
                ...state,
                isMute: false
            };
        default: 
            return state;
    }
};

export default playerReducer;