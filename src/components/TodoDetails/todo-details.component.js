import React from 'react';
import { Button, Text, Icon } from 'react-native-elements';
import { View } from 'react-native';

export class TodoDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItem: {}
        };
    }

    componentWillMount() {
        const todoItem = this.props.navigation.getParam('todoItem', {});
        this.setState({
            todoItem: todoItem
        });
    }

    onNavBack = () => {
        if (this.props.navigation) {
            this.props.navigation.goBack();
        }
    }

    render() {
        const { todoItem } = this.state;
        return (
            <View>
                <Icon name="arrow-back" onPress={this.onNavBack}/>
                <View>
                    <Text h2>{todoItem.title}</Text>
                </View>
                <View>
                    <Text h4>description</Text>
                </View>
                <View>
                    <Text h4>deadline</Text>
                </View>                
            </View>
        );
    }
}