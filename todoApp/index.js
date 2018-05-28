import { AppRegistry } from 'react-native';
// import App from './App';

import {
  StackNavigator,
  createStackNavigator,
} from 'react-navigation';

import Login from './src/js/containers/login';
import Home from './src/js/containers/home';
import Edit from './src/js/containers/edit';

const RouteConfigs = {
  Login: {
    screen: Login,
    navigationOptions: ({navigation}) => ({
      title: '登录',
    }),
  },
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: 'TODO'
    }),
  },
  Edit: {
    screen: Edit,
    navigationOptions: ({navigation}) => ({
      title: 'TODO'
    }),
  },
};

const StackNavigatorConfig = {
  initialRouteName: 'Login',
  initialRouteParams: {initPara: '初始页面参数'},
  navigationOptions: {
    title: '标题',
    headerTitleStyle: {fontSize: 18, color: '#ffffff'},
    headerStyle: {height: 0, backgroundColor: '#09b1b0'},
  },
  // paths: '',
  mode: 'card',
  headerMode: 'screen',
  cardStyle: {backgroundColor: "#ffffff"},
  transitionConfig: (() => ({})),
  onTransitionStart: (() => {}),
  onTransitionEnd: (() => {}),
};

const AppNav = createStackNavigator(RouteConfigs, StackNavigatorConfig);

AppRegistry.registerComponent('todoApp', () => AppNav);
