import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

Icon.loadFont();

const HeaderLeft = () => <Icon style={styles.icon} name="menu-outline" />;

const styles = StyleSheet.create({
    icon: {
        color: theme.colors?.white,
        fontSize: 32,
    },
});

export default HeaderLeft;
