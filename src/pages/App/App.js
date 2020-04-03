import React from 'react';
import './App.css';

//components
import Header from './../../components/Header/Header';
import SideNav from './../../components/SideNav/SideNav';
import Drawer from './../../components/Drawer/Drawer';

//containers
import MainContainer from './../../containers/MainContainer/MainContainer';
import MainContent from './../../containers/MainContent/MainContent';
import PlaylistContainer from '../../components/PlaylistContainer/PlaylistContainer';

function App() {
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
      {/* <Footer /> */}
    </>
  );
}

export default App;
