import React, { useReducer } from "react";

import styles from './App.css'
// import TodoApp from "./TodoApp";
//route
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AppProvider from "./context/AppProvider";

//comps
import Navbar from './pages/navbar/Navbar'
import Banner from './pages/banner/Banner'

//screens
import Home from './pages/home/Home'

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <AppProvider>
          <Navbar />
          <Banner />
          <Switch>
            {/* <Route path="/todo" component={ TodoList }/> */}
            <Route path="/" component={ Home }/>
          </Switch>
        </AppProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
