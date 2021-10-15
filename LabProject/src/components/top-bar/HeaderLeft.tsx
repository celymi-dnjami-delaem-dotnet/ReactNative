import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { headerLeftStyles as styles } from './styles';

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

export default HeaderLeft;
