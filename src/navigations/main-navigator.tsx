import React from 'react';
import {SafeAreaView} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteStackParamList} from '@src/configs/routes';
import HomeScreen from '@src/screens/home';
import LoginScreen from '@src/screens/auth/login';

const Stack = createNativeStackNavigator<RouteStackParamList>();

const MainNavigator = (): JSX.Element => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default MainNavigator;
