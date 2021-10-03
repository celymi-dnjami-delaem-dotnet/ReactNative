import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackHeaderProps } from '@react-navigation/native-stack';
import Main from './src/screens/Main';
import { ThemeProvider } from 'react-native-elements';
import theme from './src/theme/theme';
import SignIn from './src/screens/SignIn';
import Routes from './src/constants/routes';
import Saving from './src/screens/Saving';
import Checking from './src/screens/Checking';
import TopBarContainer from './src/components/top-bar/TopBarContainer';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name={Routes.main}
                        component={Main}
                        options={{
                            header: (props: NativeStackHeaderProps) => (
                                <TopBarContainer route={props.route} navigation={props.navigation} />
                            ),
                        }}
                    />
                    <Stack.Screen
                        name={Routes.saving}
                        component={Saving}
                        options={{
                            header: (props: NativeStackHeaderProps) => (
                                <TopBarContainer route={props.route} navigation={props.navigation} />
                            ),
                        }}
                    />
                    <Stack.Screen
                        name={Routes.checking}
                        component={Checking}
                        options={{
                            header: (props: NativeStackHeaderProps) => (
                                <TopBarContainer route={props.route} navigation={props.navigation} />
                            ),
                        }}
                    />

                    <Stack.Screen name={Routes.signIn} component={SignIn} />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default App;
