import React from 'react';
import './App.css';

import { Provider } from "react-redux";
import store from "./store";
import People from './components/People';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
 

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={People} />
      </Router>
    </Provider>
  );
}

export default App;
