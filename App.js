import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { PrimaryStackRouter } from './src/routing';
import { connect } from 'react-redux';

export default class AppComponent extends Component {
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

const mapStateToProps = (state) => {
    let userData = state.AUTH.userData;
    return {
        userData
    };
}

export const App = connect(mapStateToProps)(AppComponent);
