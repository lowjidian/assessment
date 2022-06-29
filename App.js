/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';

import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import store from './src/redux/store';

import HomeScreen from './src/screens/HomeScreen';
import RepositoryScreen from './src/screens/RepositoryScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer theme={DarkTheme}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              options={{
                title: 'Repositories',
                headerLargeTitle: true,
                headerShadowVisible: false,
                headerStyle: {
                  backgroundColor: '#000000',
                },
                headerTintColor: '#a3e635',
                headerTitleStyle: {
                  fontFamily: 'Inter-SemiBold',
                },
              }}
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen
              options={{
                title: '',
                headerBackTitleVisible: false,
                headerShadowVisible: false,
                headerStyle: {
                  backgroundColor: '#000000',
                },
                headerTintColor: '#a3e635',
              }}
              name="Repository"
              component={RepositoryScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
