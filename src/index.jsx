import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducer';
import {compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import {AppContainer} from './components/App';

const createStoreDevTools = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = createStoreDevTools(reducer);

store.dispatch({
  type: 'SET_STATE',
  state: {
    stations: [],
    channels: [],
    measurements: [],
    norms: [],
  }
});

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);