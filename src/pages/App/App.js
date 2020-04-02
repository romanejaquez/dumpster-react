import React from 'react';
import './App.css';

//components
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import SideNav from './../../components/SideNav/SideNav';

//container
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
      {/* <Footer /> */}
    </>
  );
}

export default App;
