import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entry } from './src/components';

export default class App extends Component {
    componentWillMount() {
        // var config = {
        //     apiKey: "AIzaSyCWqsinKg8eLRM2OlCkLowecdPkdTSx-iI",
        //     authDomain: "wonderapp-acffc.firebaseapp.com",
        //     databaseURL: "https://wonderapp-acffc.firebaseio.com",
        //     projectId: "wonderapp-acffc",
        //     storageBucket: "wonderapp-acffc.appspot.com",
        //     messagingSenderId: "666083869133"
        // };
        // firebase.initializeApp(config);
    }

    render() {
        return (
            <View style={styles.container}>
                <Entry/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
