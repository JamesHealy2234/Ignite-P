import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

//redux setup
import {createStore, applyMiddleware, compose} from "redux"
import rootReducer from "./reducers"
import {Provider} from "react-redux"
import thunk from "redux-thunk"


import {BrowserRouter} from 'react-router-dom'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||  compose;

// create store only allows 2 parameters
const store = createStore ( 
  rootReducer, 
  composeEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
      <BrowserRouter>
         <App />
       </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
