import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Articles from './pages/Articles';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import IndividualArticle from './pages/IndividualArticle';
import Login from './pages/Login';
import ProfileById from './pages/ProfileById';
import Topics from './pages/Topics';
import Users from './pages/Users';
import NavBar from './sub-components/NavBar';
import Error from './sub-components/Error'
import { getTopics } from './utils/api';

function App() {
  const [ topics, setTopics ] = useState([]);

  useEffect(() => {
    getTopics().then((response) => {
        setTopics(response)
    })
}, [setTopics])

  
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/articles' element={<Articles className='page' topics={topics} setTopics={setTopics}/>} />
        <Route path='/dashboard' element={<Dashboard className='page' />} />
        <Route
          path='/articles/:article_id'
          element={<IndividualArticle className='page' />}
        />
        <Route path='/login' element={<Login className='page' />} />
        <Route
          path='/users/:username'
          element={<ProfileById className='page' />}
        />
        <Route path='/topics' element={<Topics className='page' topics={topics} setTopics={setTopics}/>} />
        <Route path='/users' element={<Users className='page' />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
