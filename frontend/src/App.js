import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import View from './pages/View';
import Email from './pages/Email';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import UserPage from './pages/UserPage';

const App = () => {
  // todo, add more pages!
  return (
    <div>
      <nav>
      <Link to="/"> Home </Link>
      <Link to="/post"> Post </Link>
      <Link to="/view"> View </Link>
      

      </nav>
      <Switch>
      
      <Route path="/post">
          <Post />
        </Route>
        <Route path="/view">
          <View />
        </Route>
        <Route path="/">
          <Home />
        </Route>
       
      </Switch>
    </div>
  );
};

export default App;