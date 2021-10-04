import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Text } from 'react-native';
import { useTheme } from 'react-native-elements';
import { ITabBarType } from '../../types/tab-bar';
import Routes from '../../constants/routes';
import Home from '../../screens/Home';
import Accounts from '../../screens/Accounts';
import Giving from '../../screens/Giving';
import Payments from '../../screens/Payments';
import Cards from '../../screens/Cards';

const TabBarItems: ITabBarType[] = [
    {
        name: Routes.home,
        title: 'Home',
        component: Home,
        iconSource: require('../../../assets/icons/home-icon.png'),
    },
    {
        name: Routes.accounts,
        title: 'Accounts',
        component: Accounts,
        iconSource: require('../../../assets/icons/accounts-icon.png'),
    },
    {
        name: Routes.giving,
        title: 'Giving',
        component: Giving,
        iconSource: require('../../../assets/icons/giving-icon.png'),
    },
    {
        name: Routes.payments,
        title: 'Payments',
        component: Payments,
        iconSource: require('../../../assets/icons/payment-icon.png'),
    },
    {
        name: Routes.cards,
        title: 'Cards',
        component: Cards,
        iconSource: require('../../../assets/icons/credit-cards-icon.png'),
    },
];

const Tab = createBottomTabNavigator();

const TabBar = () => {
    const { theme } = useTheme();

    const getFontColor = (focused: boolean): string | undefined =>
        focused ? theme.colors?.primary : theme.colors?.black;

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBar,
            }}
        >
            {TabBarItems.map(x => (
                <Tab.Screen
                    key={x.name}
                    name={x.name}
                    component={x.component}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <Text style={[styles.label, { color: getFontColor(focused) }]}>{x.title}</Text>
                        ),
                        tabBarIcon: ({ focused }) => (
                            <Image style={[styles.icon, { tintColor: getFontColor(focused) }]} source={x.iconSource} />
                        ),
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        borderTopColor: 'black',
        backgroundColor: 'transparent',
    },
    icon: {
        width: 35,
        height: 35,
    },
    label: {
        fontSize: 12,
        color: '#000',
    },
});

export default TabBar;
