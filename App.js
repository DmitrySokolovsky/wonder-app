import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { PrimaryStackRouter } from './src/routing';
import { connect } from 'react-redux';
import { LoginForm } from './src/components';

export default class AppComponent extends Component {
    renderLoginForm = () => {
        return (
            <LoginForm/>
        );
    }

    render() {
        let userData = this.props.userData
        return (
            <View style={styles.container}>
                { userData ? <PrimaryStackRouter /> : this.renderLoginForm() }
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
