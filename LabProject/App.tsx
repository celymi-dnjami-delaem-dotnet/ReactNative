import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/screens/Main';
import { ThemeProvider } from 'react-native-elements';
import theme from './src/theme/theme';
import SignIn from './src/screens/SignIn';
import Routes from './src/constants/routes';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ animation: 'none' }}>
                    <Stack.Screen name={Routes.main} component={Main} />
                    <Stack.Screen name={Routes.signIn} component={SignIn} />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default App;
