import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Center } from "native-base";
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen';
import SearchScreen from './components/SearchScreen';
import WebViewScreen from './components/WebViewScreen';

const Stack = createStackNavigator();
let StackNav = <Stack.Navigator>
    <Stack.Screen options={{ title: 'APP Search Anime' }} name="AppSearch" component={HomeScreen} />
    <Stack.Screen options={{ title: '' }} name="Busqueda" component={SearchScreen} />
    <Stack.Screen options={{ title: 'WEB VIEW' }} name="WebView" component={WebViewScreen} />
</Stack.Navigator>;

const App = () => {
    return (
        <NavigationContainer>
            <NativeBaseProvider>
                {StackNav}
            </NativeBaseProvider>
        </NavigationContainer>
    );
}

export default App;