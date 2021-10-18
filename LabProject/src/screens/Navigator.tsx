import React from 'react';
import Routes from '../constants/routes';
import SignIn from './SignInScreen';
import MainScreen from './MainScreen';
import HeaderLeft from '../components/top-bar/HeaderLeft';
import HeaderRight from '../components/top-bar/HeaderRight';
import HeaderTitle from '../components/top-bar/HeaderTitle';
import { Route } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import theme from '../theme/theme';
import { useSelector } from 'react-redux';
import { getJwt } from '../selectors/authSelectors';
import SavingScreen from './SavingScreen';
import CheckingScreen from './CheckingScreen';
import ProfileScreen from './ProfileScreen';
import { IBaseRouteParams } from '../types';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    const jwt: string = useSelector(getJwt);

    const isLogged: boolean = !!jwt;

    return (
        <Stack.Navigator>
            {!isLogged ? (
                <Stack.Group screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={Routes.signIn} component={SignIn} />
                </Stack.Group>
            ) : (
                <Stack.Group
                    screenOptions={navProps => ({
                        headerStyle: styles.header,
                        headerLeft: ({ canGoBack }) => <HeaderLeft canGoBack={canGoBack} {...navProps} />,
                        headerRight: () => <HeaderRight {...navProps} />,
                        headerTitle: () => (
                            <HeaderTitle {...navProps} route={navProps.route as Route<string, IBaseRouteParams>} />
                        ),
                    })}
                >
                    <Stack.Screen name={Routes.main} component={MainScreen} />
                    <Stack.Screen name={Routes.saving} component={SavingScreen} />
                    <Stack.Screen name={Routes.checking} component={CheckingScreen} />
                    <Stack.Screen name={Routes.profile} component={ProfileScreen} />
                </Stack.Group>
            )}
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: theme.colors?.primary,
    },
});

export default Navigator;
