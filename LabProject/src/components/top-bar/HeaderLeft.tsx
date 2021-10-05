import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import theme from '../../theme/theme';

Icon.loadFont();

export interface IHeaderLeftProps extends NativeStackScreenProps<Record<string, object | undefined>> {
    canGoBack: boolean;
}

const HeaderLeft: React.FC<IHeaderLeftProps> = ({ canGoBack, navigation }) => {
    const backIconOpacity: number = 10;

    const onPressGoBack = () => {
        navigation.goBack();
    };

    return canGoBack ? (
        <TouchableOpacity activeOpacity={backIconOpacity} onPress={onPressGoBack}>
            <Image style={styles.backIcon} source={require('../../../assets/icons/back-icon.png')} />
        </TouchableOpacity>
    ) : (
        <Icon style={styles.menuIcon} name="menu-outline" />
    );
};

const styles = StyleSheet.create({
    menuIcon: {
        color: theme.colors?.white,
        fontSize: 32,
    },
    backIcon: {
        width: 20,
        height: 20,
    },
});

export default HeaderLeft;
