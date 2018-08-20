import { createDrawerNavigator } from 'react-navigation';
import { Entry, Main, DrawerRouterPrimary } from '../components';

const navConfig = {
    contentComponent: DrawerRouterPrimary
};

export const PrimaryStackRouter = createDrawerNavigator({
    entry: { screen: Entry },
    main: { screen: Main }
}, navConfig);