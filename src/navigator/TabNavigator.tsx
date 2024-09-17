
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import TicketScreen from '../screens/TicketScreen';
import UserAccountScreen from '../screens/UserAccountScreen';
import { COLORS } from '../theme/theme';
import CustomIcon from '../utils/CustomIcon';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
      <Tab.Navigator screenOptions={{ 
        headerShown: false,
        tabBarActiveTintColor: COLORS.Orange,
        tabBarIconStyle: styles.tabNavigator,
        tabBarActiveBackgroundColor: COLORS.WhiteRGBA32,
        tabBarStyle: styles.tabNavigator
        }} >
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: () => <CustomIcon name='video' size={20}  /> }} />
        <Tab.Screen name="Search" component={SearchScreen} options={{ tabBarIcon: () => <CustomIcon name='search' size={20} /> }} />
        <Tab.Screen name="Ticket" component={TicketScreen} options={{ tabBarIcon: () => <CustomIcon name='ticket' size={20} /> }} />
        <Tab.Screen name="Account" component={UserAccountScreen} options={{ tabBarIcon: () => <CustomIcon name='user' size={20} /> }} />
      </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabNavigator: {
        backgroundColor: COLORS.BlackRGB10
    },
    tabBarIcon: {
        color: COLORS.OrangeRGBA0
    }
})




