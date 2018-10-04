import React, { Component } from 'react';
import { StyleSheet, View, Button, Alert, Text, Modal } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

const View1 = () => {
    return (
        <View style={styles.container1}>
            <Text>Press the BTN to see alert.</Text>
                        <Text>********************************************</Text>
                        <Text>*******************************************</Text>
                        <Text>*****************************************</Text>
                        <Text>***************************************</Text>
                        <Text>********************************************</Text>
                        <Text>***************************************************</Text>
                        <Text>*******************************************************</Text>
                        <Text>******************************************************</Text>
                        <Text>****************************************************</Text>
                        <Text>***************************************************</Text>
                        <Text>****************************************************</Text>
                        <Text>****************************************************</Text>
                        <Text>********************************************</Text>
                        <Text>*******************************************</Text>
                        <Text>*****************************************</Text>
                        <Text>***************************************</Text>
                        <Text>********************************************</Text>
                        <Text>***************************************************</Text>
                        <Text>*******************************************************</Text>
                        <Text>******************************************************</Text>
                        <Text>****************************************************</Text>
                        <Text>***************************************************</Text>
                        <Text>****************************************************</Text>
                        <Text>****************************************************</Text>
            <Button title="Press" onPress={() => Alert.alert("HELLO22")} />
        </View>
    );
}

const View2 = () => {
    return (
        <View style={styles.container}>
            <Text>Press the BTN to see alert.</Text>
            <Button title="Press" onPress={() => Alert.alert("HELLO22")} />
        </View>
    );
}

const Nav = createBottomTabNavigator({
    View1: View1,
    View2: View2
});

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: true
        };
    }

    render() {
        return (
            <View style={{flex: 1}}>
              
                <Modal transparent={true} visible={this.state.isModalVisible} onRequestClose={() => this.setState({ isModalVisible: false })}>
                { this.state.isModalVisible ?
                    <View style={styles.container3}>
                        <Text style={styles.nonTransparent}>*******************</Text>
                        <Text style={styles.nonTransparent}>*******************</Text>
                        <Text style={styles.nonTransparent}>*******************</Text>
                        <Text style={styles.nonTransparent}>*******************</Text>
                        <Button style={styles.nonTransparent} title="Close Modal" onPress={() => this.setState({ isModalVisible: false })}/>
                    </View> : null }
                </Modal>
            
                <Nav />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        zIndex: 500
    },
    container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    container3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        opacity: 0.8
    },
    nonTransparent: {
        opacity: 1
    }
});

