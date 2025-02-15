/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

if (__DEV__) {
  import('./ReactotronConfig').then(() =>
    // eslint-disable-next-line no-console
    console.log('Reactotron Configured'),
  );
  console.tron = console;
} else {
  console.log = () => {};
  console.warn = () => {};
  console.error = () => {};
  console.info = () => {};
  console.debug = () => {};
}

AppRegistry.registerComponent(appName, () => App);
