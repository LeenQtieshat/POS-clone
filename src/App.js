import React from 'react';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from './AppContainer';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
