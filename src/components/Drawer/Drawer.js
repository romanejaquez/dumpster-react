import React from 'react';
import './Drawer.scss';
import {useSelector, useDispatch} from 'react-redux';
import drawerActions from './../../actions/drawerActions';
import PlaylistRow from './../PlaylistRow/PlaylistRow';

const Drawer = () => {
    const showDrawer = useSelector(state => state.showDrawer);
    const playlist = useSelector(state => state.playlist.allPlaylists);
    const dispatch = useDispatch();
    const slideIn = showDrawer ? 'drawer-slide-in ' : 'drawer-slide-out';

    return (
        showDrawer ?
        <div className="d-drawer">
            <div onClick={() => dispatch(drawerActions.toggleDrawer(false))} className="d-drawer-overlay"></div>
            <div className={slideIn + 'd-drawer-container'}>
                <div className="d-drawer-header">All Playlists</div>
                <div className="d-drawer-playlists">
                    {playlist.map((p) => <PlaylistRow key={p.Id} playlistInfo={p} />)}
                </div>
            </div>
        </div> : null
    );
}

export default Drawer;