import '@src/configs/i18n';
import { AppRegistry } from 'react-native';

import App from './App';
import { name as appName } from './app.json';

/**
 * @format
 */
if (__DEV__) {
  import('./reactotronConfig').then(() => console.log('Reactotron Configured'));
}

AppRegistry.registerComponent(appName, () => App);
