import React from 'react';
import { ScrollView, StyleSheet, View, NativeModules } from 'react-native';
import { Text, Icon, Header } from 'react-native-elements';
import { TextField } from 'react-native-material-textfield';
import Btn from 'react-native-micro-animated-button';

import firebase from 'react-native-firebase';

import { PacmanIndicator } from 'react-native-indicators';

export class Main extends React.Component {
    db;

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            born: '',
            //isLoading: true,
            list: []
        }

        this.db = firebase.firestore();
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log('AUTH-ed');
            } else {
                // No user is signed in.
            }
        });
    }

    // successBtnHandler = () => {
    //     if (this.props.navigation) {
    //         this.props.navigation.navigate('entry');
    //     }
    // }

    onNavBack = () => {
        if (this.props.navigation) {
            this.props.navigation.goBack();
        }
    }

    // addData = () => {
    //     let currentArr = this.state.list;
    //     let docRef = this.db.collection('db').doc('bornDates');

    //     let entity = {
    //         name: this.state.name,
    //         born: +this.state.born
    //     };
    //     currentArr.push(entity);

    //     docRef.update({
    //         datesArray: currentArr
    //     }).then(() => {
    //         this.setState({
    //             name: '',
    //             born: ''
    //         });
    //         this.addBtn.success();
    //     }).catch(() => {
    //         this.addBtn.error();
    //     });
    // }

    render() {
        // if (this.state.isLoading) {
        //     return (
        //         <View style={mainStyles.container}>
        //             <PacmanIndicator color="#222222"/>
        //         </View>
        //     );
        // }
        return (
            <ScrollView>
                <Header 
                     outerContainerStyles={mainStyles.headerView}
                     leftComponent={<Text>NOT IMPLEMENTED</Text>}
                     rightComponent={<Icon name="arrow-back" onPress={this.onNavBack}/>}/>
                <View>
                    <Text h2>Add a record</Text>
                </View>
                {/* <TextField 
                    label="Name" 
                    onChangeText={(text) => this.setState({name: text})}
                    labelTextStyle={mainStyles.inputLabel}
                    value={this.state.name}/>
                <TextField 
                    label="Born" 
                    onChangeText={(text) => this.setState({born: text})}
                    labelTextStyle={mainStyles.inputLabel}
                    value={this.state.born}/>
                <View style={mainStyles.centerContainer}>
                    <Btn 
                        label="Add" 
                        ref={ref => (this.addBtn = ref)}
                        buttonStyle={mainStyles.addBtn} 
                        successIcon="check"
                        errorIcon="warning"
                        onPress={this.addData}
                        onSuccess={this.successBtnHandler}/>
                </View> */}
            </ScrollView>
        );
    }
}

const mainStyles = StyleSheet.create({
    headerView: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'stretch',
        backgroundColor: '#76cdd8'
    },
    addBtn: {
        backgroundColor: '#76cdd8',
        marginTop: 10
    },
    inputLabel: {
        paddingLeft: 5
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerContainer: {
        flex: 0,
        alignItems: 'center'
    }
});