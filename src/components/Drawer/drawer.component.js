import React from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import { DrawerItems, SafeAreaView } from 'react-navigation';

export const DrawerRouterPrimary = (props) => (
    <ScrollView>
        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
            <Text h1>Todo app</Text>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

