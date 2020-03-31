import * as React from 'react'
import { Button } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const HomeStack = createStackNavigator()
const DetailStack = createStackNavigator()
const SettingsStack = createStackNavigator()

import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Settings from '../screens/Settings'

function HomeStackScreen({navigation}) {
  return (
      <HomeStack.Navigator
        screenOptions={{
            gestureEnabled: true,
            headerStyle: {
                backgroundColor: '#101010'
            },
            headerTitleStyle: {
                fontWeight: 'bold'
            },
            headerTintColor: '#ffd700',
            headerBackTitleVisible: false
        }}
        headerMode='float'
      >
        <HomeStack.Screen
          name='Home'
          component={Home}
          options={{
            title: 'Home Screen',
            headerLeft: () => (
              <MaterialCommunityIcons name="home" backgroundColor='#101010' color='#ffd700' style={{ margin: 10 }} size={26} onPress={() => navigation.openDrawer()} />
            ),
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Añade tu servicio"
                color="dodgerblue"
                style={{ margin: 10 }}
              />
            )
          }}
        />
      </HomeStack.Navigator>
  )
}

export { HomeStackScreen }

function DetailStackScreen({route, navigation}) {
  return (
      <DetailStack.Navigator
        screenOptions={{
            gestureEnabled: true,
            headerStyle: {
                backgroundColor: '#101010'
            },
            headerTitleStyle: {
                fontWeight: 'bold'
            },
            headerTintColor: '#ffd700',
            headerBackTitleVisible: false
        }}
        headerMode='float'
      >
        <DetailStack.Screen
          name='Detail'
          component={Detail}
          options={{
            title: 'Detail Screen',
            headerLeft: () => (
              <MaterialCommunityIcons name="home" backgroundColor='#101010' color='#ffd700' style={{ margin: 10 }} size={26} onPress={() => navigation.openDrawer()} />
            )
          }}
        />
      </DetailStack.Navigator>
  )
}

function SettingsStackScreen({navigation}) {
  return (
      <SettingsStack.Navigator
        screenOptions={{
            gestureEnabled: true,
            headerStyle: {
                backgroundColor: '#101010'
            },
            headerTitleStyle: {
                fontWeight: 'bold'
            },
            headerTintColor: '#ffd700',
            headerBackTitleVisible: false
        }}
        headerMode='float'
      >
        <SettingsStack.Screen
          name='Settings'
          component={Settings}
          options={{
            title: 'Settings Screen',
            headerLeft: () => (
              <MaterialCommunityIcons name="home" backgroundColor='#101010' color='#ffd700' style={{ margin: 10 }} size={26} onPress={() => navigation.openDrawer()} />
            )
          }}
        />
      </SettingsStack.Navigator>
  )
}


const Tab = createMaterialBottomTabNavigator()

function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      style={{ backgroundColor: 'tomato' }}
      shifting={true}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#101010',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Detail"
        component={DetailStackScreen}
        options={{
          tabBarLabel: 'Detail',
          tabBarColor: '#101010',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarColor: '#101010',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export { MainTabNavigator }

const Drawer = createDrawerNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
      {/* <MainStackNavigator /> */}
        <Drawer.Screen name='Home' component={MainTabNavigator} />
      </Drawer.Navigator>
  </NavigationContainer>
  )
}

export { MainNavigator }