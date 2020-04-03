const showLoading = (show) => {
    return {
        type: "APP_LOADING",
        loading: show
    }
};

export default {
    showLoading
}