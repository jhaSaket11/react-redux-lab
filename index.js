import React from 'react';
import ReactDOM from "react-dom";
import './style.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';


const countReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state = state + 1;
    case "DECREMENT":
      return state = state - 1;
    default:
      return state;
  }
}

const store = createStore(countReducer);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
