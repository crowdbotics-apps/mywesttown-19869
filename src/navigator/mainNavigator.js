import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile95401Navigator from '../features/UserProfile95401/navigator';
import Tutorial95400Navigator from '../features/Tutorial95400/navigator';
import NotificationList95372Navigator from '../features/NotificationList95372/navigator';
import Settings95371Navigator from '../features/Settings95371/navigator';
import Settings95363Navigator from '../features/Settings95363/navigator';
import UserProfile95361Navigator from '../features/UserProfile95361/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile95401: { screen: UserProfile95401Navigator },
Tutorial95400: { screen: Tutorial95400Navigator },
NotificationList95372: { screen: NotificationList95372Navigator },
Settings95371: { screen: Settings95371Navigator },
Settings95363: { screen: Settings95363Navigator },
UserProfile95361: { screen: UserProfile95361Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
