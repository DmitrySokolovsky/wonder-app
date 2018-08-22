import { createDrawerNavigator } from 'react-navigation';
import { Entry, Main, DrawerRouterPrimary } from '../components';
import { TodoStack } from './todo.router';

const navConfig = {
    contentComponent: DrawerRouterPrimary
};

export const PrimaryStackRouter = createDrawerNavigator({
    entry: { 
        screen: TodoStack,
        navigationOptions: {
            drawerLabel: 'Todo List',
        }
    },
    main: { 
        screen: Main,
        navigationOptions: {
            drawerLabel: 'Main Form',
        }
    }
}, navConfig);