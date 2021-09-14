import React from 'react';
import { Provider } from 'react-redux';
import Router from './Router';
import reduxConfig from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const redux = reduxConfig();
const App = () => {
  return (
    <>
      <Provider store={redux.store}>
        <PersistGate loading={null} persistor={redux.persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
