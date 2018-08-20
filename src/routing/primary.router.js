import { createDrawerNavigator } from 'react-navigation';
import { Entry, Main, DrawerRouterPrimary } from '../components';

const navConfig = {
    contentComponent: DrawerRouterPrimary
};

export const PrimaryStackRouter = createDrawerNavigator({
    entry: { 
        screen: Entry,
        navigationOptions: {
            drawerLabel: 'Entered Records',
        }
    },
    main: { 
        screen: Main,
        navigationOptions: {
            drawerLabel: 'Main Form',
        }
    }
}, navConfig);