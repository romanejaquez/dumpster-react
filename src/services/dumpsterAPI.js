import loadingActions from './../actions/loadingActions';

const dumpsterAPI = () => {

    const [apiName, setAPIName] = useState('');

    async function fetchData(url) {
        loadingActions.showLoading(true);

        const res = await fetch(url);
        res
            .json()
            .then(res => {
                dispatch(playlistActions.addPlaylists(res));
                loadingActions.showLoading(false);
            })
            .catch(err => {
                dispatch(playlistActions.addPlaylistError(err));
                loadingActions.showLoading(false);
            });
    }

    useEffect(() => {

        let url = '';

        switch(apiName) {
            case 'dumpsterMusic':
                url = 'http://streaming.drcoderz.com/files.php';
                break;
            case 'otherMusic':
                break;
        }

        fetchData(url);
    },[apiName]);

    return [{ response, isLoading, isError }, setAPIName];
}