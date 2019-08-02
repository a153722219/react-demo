import { AppRegistry } from 'react-native';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './navigators/AppNavigator';

//import App from './App';
const AppContainer = createAppContainer(AppNavigator);

AppRegistry.registerComponent('rdemo', () => AppContainer);
