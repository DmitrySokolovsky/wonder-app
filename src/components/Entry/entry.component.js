import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    ScrollView
} from 'react-native';
import {
    Header
} from 'react-native-elements';

import {
    PacmanIndicator
} from 'react-native-indicators';
import {
    TodoList,
    TodoItem
} from '../';

import firebase from 'react-native-firebase';
import {
    HeaderBtn
} from '../HeaderBtn';

export class Entry extends Component {
    db;

    constructor(props) {
        super(props);

        this.unsubscribe = null;
        this.state = {
            isLoading: true,
            list: []
        };

        this.db = firebase.firestore();
    }

    componentDidMount() {
        //var user = firebase.auth().currentUser;
        this.unsubscribe = this.db.collection('todos').onSnapshot(this.onCollectionUpdate);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onCollectionUpdate = (querySnapshot) => {
        const todos = [];

        querySnapshot.forEach((doc) => {
            const { title, complete, description } = doc.data();

            todos.push({
                key: doc.id,
                doc,
                title,
                description,
                complete,
            });
        });

        this.setState({
            list: todos,
            isLoading: false,
        });

        console.log("todoUpdate", this.state);

    }

    onToggleDrawer = () => {
        if (this.props.navigation) {
            this.props.navigation.toggleDrawer();
        }
    }

    setHeaderButton = () => {
        return <HeaderBtn onIconPress = { this.onToggleDrawer } />
    }

    onItemPressHandler = (item) => {
        this.props.navigation.navigate('details', {
            todoItem: item
        });
    }

    renderTodoItems = ({item}) => {
        return <TodoItem title={item.title} description={item.description}/>
    }

    render() {
        let { list, isLoading } = this.state;

        if (isLoading) {
            return ( <View style = {entryStyle.container} >
                <PacmanIndicator color = "#222222" />
                </View>
            );
        }

        return (
            <ScrollView >
                <Header 
                    outerContainerStyles = {entryStyle.headerContainer}
                    leftComponent = {this.setHeaderButton()}
                    centerComponent = {
                        {
                            text: 'Entry Page',
                            style: {
                                color: '#fff',
                                fontSize: 20
                            }
                        }
                    }
                    rightComponent = {
                        {
                            icon: 'home',
                            color: '#fff'
                        }
                    }
                /> 
                <View >
                    <TodoList 
                        data={list}
                        renderItem={this.renderTodoItems}/>
                </View> 
            </ScrollView>
        );
    }
}

const entryStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
});