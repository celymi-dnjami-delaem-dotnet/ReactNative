import React from 'react';
import { Image, ImageSourcePropType, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { formatPrice } from '../../../utils';
import styles from './styles';

export interface ICardRowProps {
    leftTitle: string;
    leftSubtitle: string;
    amount: number;
    routeName?: string;
    customRootStyle?: StyleProp<ViewStyle>;
    leftTitleIcon?: ImageSourcePropType;
    rightTitleIcon?: ImageSourcePropType;
    bottomNode?: React.ReactNode;
    onPress?: () => void;
}

const CardRow: React.FC<ICardRowProps> = ({
    leftSubtitle,
    customRootStyle,
    leftTitleIcon,
    rightTitleIcon,
    leftTitle,
    amount,
    onPress,
    bottomNode,
}) => (
    <TouchableOpacity style={[styles.root, customRootStyle]} onPress={onPress} activeOpacity={1}>
        <View style={styles.cardBody}>
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
        </View>
        {bottomNode}
    </TouchableOpacity>
);

export default CardRow;
