import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';
import { Icon } from 'native-base';

import SignUpScreen from './../Screen/SignUpScreen';
import LoginScreen from './../Screen/LoginScreen';
import FirstTabScreen from './../Screen/FirstTabScreen';
import SecondTabScreen from './../Screen/SecondTabScreen';
import InnerFirstScreen from './../Screen/InnerFirstScreen';
import InnerSecondScreen from './../Screen/InnerSecondScreen';
import FirstList from "./../Components/FirstList";

import Sidebar from './Sidebar';
import { color } from './../Style/Color';

const viewBusinessStack = createBottomTabNavigator(
  {
    First: FirstTabScreen,
    Second: SecondTabScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        let tabColor;
        if (routeName === 'First') {
          iconName = 'person';
          tabColor = focused ? color.primary : color.inactive;
        } else if (routeName === 'Second') {
          iconName = 'cart';
          tabColor = focused ? color.primary : color.inactive;
        }
        return (
          <View style={{ alignItems: 'center' }}>
            <Icon
              name={iconName}
              style={{ color: tabColor }}
              type={
                routeName === 'Debts' ? 'MaterialCommunityIcons' : 'Ionicons'
              }
            />
            <Text style={{ color: tabColor }}>{routeName}</Text>
          </View>
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: color.primary,
      inactiveTintColor: color.inactive,
      showLabel: false,
      style: {
        backgroundColor: color.secondary,
        height: 60,
        paddingVertical: 8
      }
    },
    animationEnabled: true,
    swipeEnabled: true
  }
);

const businessStack = createStackNavigator(
  {
    ViewBusiness: viewBusinessStack,
    FirstList: FirstList,
    InnerFirst: InnerFirstScreen,
    InnerSecond: InnerSecondScreen,
  },
  {
    initialRouteName: 'ViewBusiness',
    navigationOptions: ({ navigation }) => ({
      title: 'Nigerian Programmers Charity',
      headerLeft: (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Icon
                name={'menu'}
                style={styles.menuIcon}
            />
        </TouchableOpacity>
      ),
      headerTintColor: color.secondary,
      headerStyle: {
        backgroundColor: color.primary
      }
    })
  }
);

const DrawerStack = createDrawerNavigator(
  {
    BusinessList: businessStack
  },
  {
    initialRouteName: 'BusinessList',
    contentComponent: (props) => <Sidebar {...props} />,
    contentOptions: {
      activeTintColor: color.secondary,
      activeBackgroundColor: color.primary,
      inactiveTintColor: color.primary
    }
  }
);

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    SignUp: SignUpScreen
  },
  {
    headerMode: 'none'
  }
);

const switchStack = createSwitchNavigator(
  {
    Auth: AuthStack,
    App: DrawerStack
  },
  {
    initialRouteName: 'Auth'
  }
);

export default switchStack;

const styles = StyleSheet.create({
    menuIcon: {
      color: color.secondary,
      padding: 16,
      fontSize: 28
    }
  })