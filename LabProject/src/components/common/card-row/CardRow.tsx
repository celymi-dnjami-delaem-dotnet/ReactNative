import React from 'react';
import { Image, ImageSourcePropType, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { formatPrice } from '../../../utils';
import styles from './styles';

export interface ICardRowProps {
    routeName: string;
    leftTitle: string;
    leftSubtitle: string;
    amount: number;
    customRootStyle?: StyleProp<ViewStyle>;
    leftTitleIcon?: ImageSourcePropType;
    rightTitleIcon?: ImageSourcePropType;
    onPress?: () => void;
}

const CardRow = ({
    leftSubtitle,
    customRootStyle,
    leftTitleIcon,
    rightTitleIcon,
    leftTitle,
    amount,
    onPress,
}: ICardRowProps) => (
    <TouchableOpacity style={[styles.root, customRootStyle]} onPress={onPress}>
        <View style={styles.cardRowLeft}>
            <Text style={styles.leftTitle}>
                {leftTitle} {leftTitleIcon && <Image style={styles.letTitleIcon} source={leftTitleIcon} />}
            </Text>
            <Text style={styles.leftSubtitle}>{leftSubtitle}</Text>
        </View>
        <View style={styles.cardRowRight}>
            <Text style={styles.rightTitle}>{formatPrice(amount)}</Text>
            {rightTitleIcon && <Image style={styles.rightIcon} source={rightTitleIcon} />}
        </View>
    </TouchableOpacity>
);

export default CardRow;
