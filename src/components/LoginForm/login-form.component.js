import React from 'react';
import { View, Button, TextInput } from 'react-native';
import firebase from 'react-native-firebase';

import { logIn } from '../../store/actions';

export class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    logInPress = (e) => {
        const creds = {
            email: this.state.email,
            password: this.state.password
        }

        console.log(this.state.email);

       firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(err => console.log(err.User.uuid)).catch(err => console.log(err));
       //res => this.props.setUserUuid(res.uuid)
    }

    render() {
        return (
            <View>dmitry
                <TextInput onChangeText={(text) => this.setState({email: text})}/>
                <TextInput onChangeText={(text) => this.setState({password: text})}/>
                <Button title="LOG IN" onPress={this.logInPress}/>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserUuid:(uuid) =>  dispatch(logIn({uuid: uuid}))
    }
}