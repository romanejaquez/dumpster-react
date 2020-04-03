import React from 'react';
import './App.css';
import {useSelector} from 'react-redux';

//components
import Header from './../../components/Header/Header';
import SideNav from './../../components/SideNav/SideNav';
import Drawer from './../../components/Drawer/Drawer';
import Loading from './../../components/Loading/Loading';

//containers
import MainContainer from './../../containers/MainContainer/MainContainer';
import MainContent from './../../containers/MainContent/MainContent';
import PlaylistContainer from '../../components/PlaylistContainer/PlaylistContainer';

function App() {

  const loading = useSelector(state => state.loading);

  return (
    <>
      <Header />
      <MainContainer>
        <SideNav />
        <MainContent>
          <PlaylistContainer />
        </MainContent>
      </MainContainer>
      <Drawer />
      {loading ? <Loading /> : null}
    </>
  );
}

export default App;
