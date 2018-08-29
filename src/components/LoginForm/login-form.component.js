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
            password: '',
            uid: ''
        };
    }

    // componentWillMount() {
    //     firebase.auth().onAuthStateChanged(function(user) {
    //         if (user) {
    //             console.log('AUTH-ed');
    //         } else {
    //             // No user is signed in.
    //         }
    //     });
    // }

    logInPress = () => {
        const creds = {
            email: this.state.email,
            password: this.state.password
        }

        console.log(this.state.email);

       firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(user => {
            console.log(user.uid);
            this.setState({
                uid: user.uid
            });
        }).catch(err => console.log(err));
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

// const mapPropsToState = (state) => {
//     let userData = state.au
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setUserUuid:(uuid) =>  dispatch(logIn({uuid: uuid}))
//     }
// };

// export const LoginForm = connect()(LoginFormComponent);