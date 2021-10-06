import React from 'react';
import Routes from '../constants/routes';
import SignIn from './SignIn';
import Main from './Main';
import HeaderLeft from '../components/top-bar/HeaderLeft';
import HeaderRight from '../components/top-bar/HeaderRight';
import HeaderTitle, { IHeaderTitleRouteArgs } from '../components/top-bar/HeaderTitle';
import { Route } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import theme from '../theme/theme';
import { useSelector } from 'react-redux';
import { getJwt } from '../selectors/authSelectors';
import Saving from './Saving';
import Checking from './Checking';

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
                            <HeaderTitle {...navProps} route={navProps.route as Route<string, IHeaderTitleRouteArgs>} />
                        ),
                    })}
                >
                    <Stack.Screen name={Routes.main} component={Main} />
                    <Stack.Screen name={Routes.saving} component={Saving} />
                    <Stack.Screen name={Routes.checking} component={Checking} />
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
