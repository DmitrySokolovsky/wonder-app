import React from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';

export class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <ListItem
                    title={this.props.title}
                    subtitle={this.props.description}
                    leftIcon={{ name: 'av-timer' }}
                />
            </View>
        );
    }
}