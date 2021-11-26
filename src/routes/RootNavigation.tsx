import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import  { HistoryScreen } from '../pages/HistoryScreen'
import  { UserScreen } from '../pages/UserScreen'

import { CalenderIcon } from '../assets/icons/CalendarIcon'
import { UserIcon } from '../assets/icons/UserIcon'

import { tabBarIconProps } from './interfaces'

const Tab = createBottomTabNavigator()

const TabScreen = [
  {
    name:"HistoryScreen",
    component: HistoryScreen,
    options: {
      tabBarLabel:"Histórico",
      tabBarIcon: ({focused, color}:tabBarIconProps)=>focused?<CalenderIcon color={color} />:<CalenderIcon/>
    }
  },
  {
    name:"UserScreen",
    component: UserScreen,
    options: {
      tabBarLabel:"Usuários",
      tabBarIcon: ({focused, color}:tabBarIconProps)=>focused?<UserIcon color={color} />:<UserIcon/>
    }
  }
]

export const RootNavigation = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="HistoryScreen"
      >
        {
          TabScreen.map(options=> <Tab.Screen {...options} key={options.name} />)
        }
      </Tab.Navigator>
    </NavigationContainer>
  )
}