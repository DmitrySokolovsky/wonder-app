import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { PrimaryStackRouter } from './src/routing';
import { connect } from 'react-redux';
import { LoginForm } from './src/components';
import firebase from 'react-native-firebase';
import { PacmanIndicator } from 'react-native-indicators';

export default class AppComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: '', 
            isLoading: true
        };
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    userData: user.uid,
                    isLoading: false
                });
            } else {
                this.setState({
                    isLoading: false
                });
            }
        });
    }

    renderLoginForm = () => {
        return (
            <LoginForm/>
        );
    }

    render() {
        let { userData, isLoading } = this.state;

        if(isLoading) {
            return (
                <View style={[styles.container, styles.containerCenter]}>
                    <PacmanIndicator color="#222222"/>
                </View>
            );
        }

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
    },
    containerCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const mapStateToProps = (state) => {
    let userData = state.AUTH.userData;
    return {
        userData
    };
}

export const App = connect(mapStateToProps)(AppComponent);
