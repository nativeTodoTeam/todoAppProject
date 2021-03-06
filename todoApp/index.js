import { AppRegistry } from 'react-native';
// import App from './App';

import {
  StackNavigator,
  createStackNavigator,
} from 'react-navigation';

import Login from './src/js/containers/login';
import Home from './src/js/containers/home';
import Edit from './src/js/containers/edit';
// import Test from './src/js/test/test';

const RouteConfigs = {
  // Test: {
  //   screen: Test,
  //   navigationOptions: ({navigation}) => ({
  //     title: '登录',
  //   }),
  // },
  Login: {
    screen: Login,
    navigationOptions: ({navigation}) => ({
      title: '登录',
    }),
  },
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: 'TODO',
      headerStyle: {height: 48, backgroundColor: '#09b1b0'},
    }),
  },
  Edit: {
    screen: Edit,
    navigationOptions: ({navigation}) => ({
      title: '编辑',
      headerStyle: {height: 48, backgroundColor: '#09b1b0'},
    }),
  },
};

const StackNavigatorConfig = {
  initialRouteName: 'Login',
  initialRouteParams: {initPara: '初始页面参数'},
  navigationOptions: {
    title: '标题',
    headerTitleStyle: {fontSize: 24},
    headerBackTitle: '返回',
    headerBackTitleStyle: {fontSize: 18,},
    headerTintColor: '#fff',
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
