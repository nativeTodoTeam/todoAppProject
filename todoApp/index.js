import { AppRegistry } from 'react-native';
// import App from './App';

import {
  StackNavigator,
} from 'react-navigation';


import Test1 from './src/js/test1';
import Test2 from './src/js/test2';

const AppNav = StackNavigator({
  // App: {screen: App},
  Test1: {screen: Test1},
  Test2: {screen: Test2},
});

AppRegistry.registerComponent('todoApp', () => AppNav);
