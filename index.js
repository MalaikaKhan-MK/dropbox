/**
 * @format
 */

import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler'; // Navigation ke liye zaroori
import App from './App';
import { name as appName } from './app.json';

// AppRegistry sirf appName string leta hai, isliye hum app.json se woh import kar rahe hain
AppRegistry.registerComponent(appName, () => App);