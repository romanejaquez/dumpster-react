const initState = false;

const drawerReducer = (state = initState, action) => {
    switch(action.type) {
        case "TOGGLE_DRAWER":
            state = action.showDrawer;
            return state;
        default:
            return state;
    }
}

export default drawerReducer;