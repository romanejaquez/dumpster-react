const play = () => {
    return {
        type: "PLAYER_PLAY",
    }
};

const pause = () => {
    return {
        type: "PLAYER_PAUSE"
    }
};

const next = () => {
    return {
        type: "PLAYER_NEXT"
    }
};

const prev = () => {
    return {
        type: "PLAYER_PREV"
    }
};

const mute = () => {
    return {
        type: "PLAYER_MUTE"
    }
};

const unmute = () => {
    return {
        type: "PLAYER_UNMUTE"
    }
};

export default {
    play,
    pause,
    next,
    prev,
    mute,
    unmute
}