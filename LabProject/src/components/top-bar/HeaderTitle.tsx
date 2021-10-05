import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import theme from '../../theme/theme';

export interface IHeaderTitleRouteArgs {
    pageName?: string;
    title?: string;
}

export interface IHeaderTitleProps extends NativeStackScreenProps<Record<string, IHeaderTitleRouteArgs>> {}

const HeaderTitle: React.FC<IHeaderTitleProps> = ({ route: { params } }) =>
    params?.pageName && params?.title ? (
        <View style={styles.pageDescriptionContainer}>
            <Text style={styles.pageName}>{params.pageName}</Text>
            <Text style={styles.title}>{params.title}</Text>
        </View>
    ) : (
        <Image style={styles.logo} source={require('../../../assets/icons/app-logo-icon.png')} />
    );

const styles = StyleSheet.create({
    logo: {
        width: 180,
        height: 30,
    },
    icon: {
        color: theme.colors?.white,
        fontSize: 32,
    },
    pageDescriptionContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    pageName: {
        fontSize: 18,
        color: theme.colors?.white,
    },
    title: {
        fontSize: 12,
        color: theme.colors?.white,
    },
});

export default HeaderTitle;
