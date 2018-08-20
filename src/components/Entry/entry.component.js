import React, { Component } from 'react';
import { StyleSheet, View, TextInput, ToastAndroid, Text, ScrollView } from 'react-native';
import { Header, List, ListItem, Button } from 'react-native-elements';

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

        console.log(this.props);
    }

    onToggleDrawer = () => {
        if (this.props.navigation) {
            this.props.navigation.toggleDrawer();
        }
    }

    setHeaderButton = () => {
        return <HeaderBtn onIconPress={this.onToggleDrawer}/>
    }

    render() {
        let { list, isLoading } = this.state;

        if(isLoading) {
            return (
                <View style={entryStyle.container}>
                    <Text>IS LOADING...</Text>
                </View>
            );
        }

        return (
            <ScrollView style={entryStyle.container}>
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
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
});