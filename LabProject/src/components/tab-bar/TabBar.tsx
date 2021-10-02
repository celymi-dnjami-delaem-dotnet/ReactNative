import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import { TabBarItems } from '../../constants/tab-bar';

const Tab = createBottomTabNavigator();

const TabBar = () => {
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
                        title: x.title,
                        tabBarLabelStyle: styles.label,
                        tabBarIcon: () => <Image style={styles.icon} source={x.iconSource} />,
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
