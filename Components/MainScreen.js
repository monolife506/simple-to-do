import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

// 하단 탭에 들어갈 컴포넌트들
import InforTab from './AppTabNavigator/InforTab'
import TodoTab from './AppTabNavigator/TodoTab'

// 하단 탭 네비게이터 생성
const BottomTabNavigator = createMaterialBottomTabNavigator({
  InforTab: { screen: InforTab },
  TodoTab: { screen: TodoTab },
});

const AppTabContainet = createAppContainer(BottomTabNavigator);

export default class MainScreen extends Component
{
    static navigationOptions = 
    {
        title: 'Simple To-Do',
        headerStyle: 
        {
            backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerTitleStyle: 
        {
            fontWeight: 'normal',
        },
    }

    render()
    {
        return <AppTabContainet />;
    }
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})