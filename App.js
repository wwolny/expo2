import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux';

import store from './src/store';
import MainBar from './src/mainBar';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainBar />
      </Provider>
    );
  }
}


Expo.registerRootComponent(App);
