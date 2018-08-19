import React, { Component } from 'react';
import { StyleSheet, View, TextInput, ToastAndroid, Text } from 'react-native';
import { Header, List, ListItem, Button } from 'react-native-elements';

import firebase from 'react-native-firebase';

export class Entry extends Component {
    db;

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            born: '',
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
            console.log(this.state.list);
        });
    }

    addData = () => {
        let currentArr = this.state.list;
        let docRef = this.db.collection('db').doc('bornDates');
        console.log(docRef);

        let entity = {
            name: this.state.name,
            born: +this.state.born
        };
        currentArr.push(entity);

        docRef.update({
            datesArray: currentArr
        }).then(() => {
            ToastAndroid.show('Added', ToastAndroid.SHORT);
            this.setState({
                name: '',
                born: ''
            });
        });
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
            <View style={entryStyle.container}>
                    <View>
                        <Header
                            leftComponent={{ icon: 'menu', color: '#fff' }}
                            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                            rightComponent={{ icon: 'home', color: '#fff' }}
                            />
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
                        <TextInput 
                            placeholder="Name" 
                            onChangeText={(text) => this.setState({name: text})}
                            value={this.state.name}/>
                        <TextInput 
                            placeholder="Born" 
                            onChangeText={(text) => this.setState({born: text})}
                            value={this.state.born}/>                        
                        <Button 
                            title="Add" 
                            buttonStyle={entryStyle.btn} 
                            onPress={this.addData}/>
                    </View>
            </View>            
        );
    }
}

const entryStyle = StyleSheet.create({
    btn: {
        backgroundColor: 'green'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});