import React from 'react';
import { NavigationContainer, Route } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/screens/Main';
import { ThemeProvider } from 'react-native-elements';
import theme from './src/theme/theme';
import SignIn from './src/screens/SignIn';
import Routes from './src/constants/routes';
import Saving from './src/screens/Saving';
import Checking from './src/screens/Checking';
import HeaderLeft from './src/components/top-bar/HeaderLeft';
import HeaderRight from './src/components/top-bar/HeaderRight';
import HeaderTitle, { IHeaderTitleRouteArgs } from './src/components/top-bar/HeaderTitle';
import { StyleSheet } from 'react-native';
import configureStore from './src/store/store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();
const store = configureStore();

const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name={Routes.signIn} component={SignIn} />

                        <Stack.Screen
                            name={Routes.main}
                            component={Main}
                            options={navProps => ({
                                headerStyle: styles.header,
                                headerLeft: ({ canGoBack }) => <HeaderLeft canGoBack={canGoBack} {...navProps} />,
                                headerRight: () => <HeaderRight {...navProps} />,
                                headerTitle: () => (
                                    <HeaderTitle
                                        {...navProps}
                                        route={navProps.route as Route<string, IHeaderTitleRouteArgs>}
                                    />
                                ),
                            })}
                        />
                        <Stack.Screen
                            name={Routes.saving}
                            component={Saving}
                            options={navProps => ({
                                headerStyle: styles.header,
                                headerLeft: ({ canGoBack }) => <HeaderLeft canGoBack={canGoBack} {...navProps} />,
                                headerRight: () => <HeaderRight {...navProps} />,
                                headerTitle: () => (
                                    <HeaderTitle
                                        {...navProps}
                                        route={navProps.route as Route<string, IHeaderTitleRouteArgs>}
                                    />
                                ),
                            })}
                        />
                        <Stack.Screen
                            name={Routes.checking}
                            component={Checking}
                            options={navProps => ({
                                headerStyle: styles.header,
                                headerLeft: ({ canGoBack }) => <HeaderLeft canGoBack={canGoBack} {...navProps} />,
                                headerRight: () => <HeaderRight {...navProps} />,
                                headerTitle: () => (
                                    <HeaderTitle
                                        {...navProps}
                                        route={navProps.route as Route<string, IHeaderTitleRouteArgs>}
                                    />
                                ),
                            })}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </ThemeProvider>
        </Provider>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: theme.colors?.primary,
    },
});

export default App;
