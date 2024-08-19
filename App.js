/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomComponent from './components/bottom-navi';
import OrganDetails from './components/OrganDetails';
import HomePage from './components/HomePage';

const Stack = createNativeStackNavigator();

const App = () => (
  <SafeAreaView style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="mainTabs"
          component={BottomComponent}
          options={{headerShown: false}}
        />

        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="OrganDetails" component={OrganDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
