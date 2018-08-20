import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Text, Icon, Header } from 'react-native-elements';

export class Main extends React.Component {
    onNavBack = () => {
        if (this.props.navigation) {
            this.props.navigation.goBack();
        }
    }

    render() {
        return (
            <ScrollView>
                <Header 
                     outerContainerStyles={mainStyles.headerView}
                     centerComponent={{text: 'Main form', style: { color: '#fff', fontSize: 20 }}}
                     rightComponent={<Icon name="arrow-back" onPress={this.onNavBack}/>}/>
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
    
});