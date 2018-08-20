import { Icon } from 'react-native-elements';
import React from 'react';

export const HeaderBtn = (props) => {
    return (
        <Icon 
            name="apps"
            color='#fff'
            onPress={() => props.onIconPress()}
            size={30}
        />
    );
};
