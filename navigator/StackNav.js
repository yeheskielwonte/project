import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header } from 'react-native-elements';

import Global from '../screens/Global';
import Indonesia from '../screens/Indonesia';

const TabNavigator = createBottomTabNavigator({
    Global: Global,
    Indonesia: Indonesia
},{
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let IconComponent = Ionicons;
            let iconName;
            if (routeName === 'Global') {
                iconName = `md-globe`;
            } else if (routeName === 'Indonesia') {
                iconName = `ios-information`;
            }
            return <IconComponent name={iconName} size={25} color={tintColor} />;
          },
    }),
    tabBarOptions: {
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
    },
    initialRouteName: 'Global'
})

export default createAppContainer(TabNavigator);
