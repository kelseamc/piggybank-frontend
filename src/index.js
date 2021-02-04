import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux";
import './index.css';
import App from './components/App';
import store from "./redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>, 
    document.getElementById("root")
);

