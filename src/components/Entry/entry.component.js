import React, { Component } from 'react';
import { StyleSheet, View, TextInput, ToastAndroid, Text, ScrollView, NativeModules } from 'react-native';
import { Header, List, ListItem, Button } from 'react-native-elements';

import { PacmanIndicator } from 'react-native-indicators';

import firebase from 'react-native-firebase';
import { HeaderBtn } from '../HeaderBtn';

export class Entry extends Component {
    db;

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            list: []
        };

        this.db = firebase.firestore();
    }

    componentWillMount() {
        let a = this.db.collection('db').doc('bornDates');
        a.get().then(doc => {
            this.setState({
                list: doc.data().datesArray,
                isLoading: false
            });
        });

        
    }

    onToggleDrawer = () => {
        if (this.props.navigation) {
            this.props.navigation.toggleDrawer();
        }
    }

    setHeaderButton = () => {
        return <HeaderBtn onIconPress={this.onToggleDrawer}/>
    }

    onPressShow = () => {
        const context = NativeModules.FirebaseManager;
        let a;
        context.showContext((res) => a = res);
    }

    render() {
        let { list, isLoading } = this.state;

        if(isLoading) {
            return (
                <View style={entryStyle.container}>
                    <PacmanIndicator color="#222222"/>
                </View>
            );
        }

        return (
            <ScrollView>
                <Button title="show"
                onPress={this.onPressShow}/>
                <Header
                    outerContainerStyles={entryStyle.headerContainer}
                    leftComponent={this.setHeaderButton()}
                    centerComponent={{text: 'Entry Page', style: { color: '#fff', fontSize: 20 }}}
                    rightComponent={{ icon: 'home', color: '#fff' }}/>
                <View>
                    <List containerStyle={{marginBottom: 20}}>
                        {
                        list.map((item, index) => (
                            <ListItem
                                leftIcon={{name: 'android'}}
                                key={index}
                                title={item.name}
                                subtitle={item.born}
                                />
                        ))}
                    </List>
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