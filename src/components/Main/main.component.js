import React from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { Text, Icon, Header, Button } from 'react-native-elements';

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            born: '',
            isLoading: true,
            list: []
        }
    }

    onNavBack = () => {
        if (this.props.navigation) {
            this.props.navigation.goBack();
        }
    }

    addData = () => {
        let currentArr = this.state.list;
        let docRef = this.db.collection('db').doc('bornDates');

        let entity = {
            name: this.state.name,
            born: +this.state.born
        };
        currentArr.push(entity);

        docRef.update({
            datesArray: currentArr
        }).then(() => {
            ToastAndroid.show('Added', ToastAndroid.SHORT);
            this.setState({
                name: '',
                born: ''
            });
            this.props.navigation.navigate('entry');
        });
    }

    render() {
        return (
            <ScrollView>
                <Header 
                     outerContainerStyles={mainStyles.headerView}
                     leftComponent={<Text>Main Form</Text>}
                     rightComponent={<Icon name="arrow-back" onPress={this.onNavBack}/>}/>
                <View>
                    <Text h2>Add a record</Text>
                </View>
                <TextInput 
                    placeholder="Name" 
                    onChangeText={(text) => this.setState({name: text})}
                    value={this.state.name}/>
                <TextInput 
                    placeholder="Born" 
                    onChangeText={(text) => this.setState({born: text})}
                    value={this.state.born}/>
                <Button 
                    title="Add" 
                    buttonStyle={mainStyles.addBtn} 
                    onPress={this.addData}/>
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
        backgroundColor: '#76cdd8'
    }
});