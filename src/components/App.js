import 'babel-polyfill'

import React, { useReducer } from "react";

import styles from './App.css'
// import TodoApp from "./TodoApp";
//route
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//context
import AppProvider from "./context/AppProvider";

//comps
import Navbar from './pages/navbar/Navbar'

//screens
import Home from './pages/home/Home'
import Post from './pages/post/Post'

const App = () => {

  return (
    <div>
      <AppProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            {/* <Route path="/todo" component={ TodoList }/> */}
            <Route path="/:postId" component={ Post }/>
            <Route path="/" component={ Home }/>
          </Switch>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
};

export default App;
