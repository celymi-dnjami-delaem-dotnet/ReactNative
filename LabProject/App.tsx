import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/screens/Main';
import { ThemeProvider } from 'react-native-elements';
import theme from './src/theme/theme';
import SignIn from './src/screens/SignIn';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Main" component={Main} />
                    <Stack.Screen name="SignIn" component={SignIn} />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default App;
