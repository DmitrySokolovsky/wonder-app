import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entry, Main } from './src/components';
import { PrimaryStackRouter } from './src/routing';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <PrimaryStackRouter />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
