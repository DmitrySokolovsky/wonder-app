import React, { Component } from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';
import firebase from 'react-native-firebase';

export default class App extends Component {

    componentDidMount() {
        firebase.messaging().hasPermission()
            .then(enabled => {
                if (enabled) {
                    Alert.alert('Hello it works');
                } else {
                    Alert.alert('Hello!@');
                } 
        });
    }

    press = () => {
        Alert.alert('Hello');
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Press" onPress={this.press} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
