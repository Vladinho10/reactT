import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { toDoReducer } from './reducers/toDoReducer';
import  "./less/style.less";
import App from './scripts/App';


const store = createStore(toDoReducer, applyMiddleware(thunk));
// console.log(store);
// console.log(store.getState());
// console.log(store.dispatch(addAction('my name is Lakhan')));
// console.log(store);

ReactDOM.render(
  <Provider  store={store}>
    <App />
  </Provider>,
  root);
