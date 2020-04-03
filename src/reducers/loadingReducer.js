const initState = false;

const drawerReducer = (state = initState, action) => {
    switch(action.type) {
        case "APP_LOADING":
            state = action.loading;
            return state;
        default:
            return state;
    }
}

export default drawerReducer;