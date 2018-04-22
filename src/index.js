import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import rootReducer from './reducers'
import Routes from './Routes';

const store = createStore(rootReducer, applyMiddleware(thunk))
store.subscribe(() => {
  console.log(store.getState());
});

render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);
