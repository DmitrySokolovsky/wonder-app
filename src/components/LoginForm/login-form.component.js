import React from 'react';
import { View, Button, TextInput } from 'react-native';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';

import { logIn } from '../../store/actions';

export class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    logInPress = () => {
        if (this.props.onLoginPress) {
            this.props.onLoginPress(this.state.email, this.state.password);
        }
    }

    render() {
        return (
            <View>
                <TextInput onChangeText={(text) => this.setState({email: text})}/>
                <TextInput onChangeText={(text) => this.setState({password: text})}/>
                <Button title="LOG IN" onPress={this.logInPress}/>
            </View>
        );
    }
}
