import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

const TopBar = () => {
    return (
        <View style={styles.root}>
            <Icon style={styles.icon} name="menu-outline" />
            <Image style={styles.logo} source={require('../../../assets/icons/app-logo-icon.png')} />
            <Icon style={styles.icon} name="person-circle-outline" />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: 50,
        display: 'flex',
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'pink',
    },
    logo: {
        width: 200,
        height: 50,
    },
    icon: {
        color: '#FFF',
        fontSize: 32,
    },
});

export default TopBar;
