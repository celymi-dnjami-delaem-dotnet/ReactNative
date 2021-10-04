import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Text } from 'react-native';
import { TabBarItems } from '../../constants/tab-bar';
import { useTheme } from 'react-native-elements';

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
