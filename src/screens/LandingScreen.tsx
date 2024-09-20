import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';

const LandingScreen = () => {
  return (
    <View>
      <Text>LandingScreen</Text>
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>Press Me</Button>
    </View>
  )
}

export default LandingScreen

const styles = StyleSheet.create({})