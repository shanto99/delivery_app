import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import AuthReducer from "./reducers/AuthReducer";

import {createStore} from "redux";
import { Provider } from "react-redux";

const store = createStore(AuthReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
