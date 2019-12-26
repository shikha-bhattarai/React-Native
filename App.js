import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/Components';
import ListScreen from './src/screens/ListScreen';

//Stack navigator
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen
  },
  {
    //First component that should be displayed
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'MyReactApp'
    }
  }
);

export default createAppContainer(navigator);
