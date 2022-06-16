import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Chat from './Components/Chat/Chat';
import History from './Components/Content/HistoryGame/History';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <NavBar />
        <div className='Content'>
          <Routes>
            <Route path='/History' element={<History />}/>
            <Route path='/Chat' element={<Chat />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;