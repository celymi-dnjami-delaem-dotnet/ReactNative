import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import { ThemeProvider } from 'react-native-elements';
import theme from './src/theme/theme';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default App;
