import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/Components';
import ListScreen from './src/screens/ListScreen';

//this is called stack navigator
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen
  },
  {
    //First component that should be displayed
    initialRouteName: 'Home', //same name as line 9 Components
    defaultNavigationOptions: {
      title: 'MyReactApp'
    }
  }
);

export default createAppContainer(navigator);
