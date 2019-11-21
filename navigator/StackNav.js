import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import Theater from '../screens/Theater';

const TabNavigator = createBottomTabNavigator({
    Home: Home,
    Theater: Theater
},{
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let IconComponent = Ionicons;
            let iconName;
            if (routeName === 'Home') {
                iconName = `ios-home`;
            } else if (routeName === 'Theater') {
                iconName = `ios-calendar`;
            }
            return <IconComponent name={iconName} size={25} color={tintColor} />;
          },
    }),
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    },
    initialRouteName: 'Home'
})

const StackNavigator = createStackNavigator({
    TabNavigator: TabNavigator
},{
    defaultNavigationOptions: ({ navigation }) => ({
        headerTitle: "XXI"
    })
})

export default createAppContainer(StackNavigator);