import React from 'react';
import { Image, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { headerTitleStyles as styles } from './styles';
import { IBaseRouteParams } from '../../types';

export interface IHeaderTitleProps extends NativeStackScreenProps<Record<string, IBaseRouteParams>> {}

const HeaderTitle: React.FC<IHeaderTitleProps> = ({ route: { params } }) =>
    params?.pageName ? (
        <View style={styles.pageDescriptionContainer}>
            <Text style={styles.pageName}>{params.pageName}</Text>
            {params?.title && <Text style={styles.title}>{params.title}</Text>}
        </View>
    ) : (
        <Image style={styles.logo} source={require('../../../assets/icons/app-logo-icon.png')} />
    );

export default HeaderTitle;
