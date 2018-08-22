import { createStackNavigator } from 'react-navigation';
import { Entry, TodoDetails } from '../components';

export const TodoStack = createStackNavigator({
    entry: { screen: Entry },
    details: { screen: TodoDetails }
},
{
    initialRouteName: 'entry',
    headerMode: 'none'
});