import React from 'react';
import { FlatList, View, Text } from 'react-native';

export class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <FlatList
                    renderItem={this.props.renderItem}
                    data={this.props.data}
                />
            </View>
        );
    }
}