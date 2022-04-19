import './App.css';
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Articles from './pages/Articles';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import IndividualArticle from './pages/IndividualArticle';
import Login from './pages/Login';
import ProfileById from './pages/ProfileById';
import Topics from './pages/Topics';
import Users from './pages/Users';

function App() {
  /* let navigate = useNavigate();
  navigate('/home'); */

  return (
    <div className="App">
      <Routes>
        <Route path='/articles' element={<Articles />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/articles/:article_id' element={<IndividualArticle />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/users/:username' element={<ProfileById />}/>
        <Route path='/topics' element={<Topics />}/>
        <Route path='/users' element={<Users />}/>
      </Routes>
    </div>
  );
}

export default App;
