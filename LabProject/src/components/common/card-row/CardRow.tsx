import React from 'react';
import { Image, ImageSourcePropType, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { formatPrice } from '../../../utils';
import getStyles from './styles';

export interface ICardRowProps {
    leftTitle: string;
    leftSubtitle: string;
    amount: number;
    routeName?: string;
    highlightCardTextColor?: string;
    customRootStyle?: StyleProp<ViewStyle>;
    leftTitleIcon?: ImageSourcePropType;
    leftIcon?: ImageSourcePropType;
    rightIcon?: ImageSourcePropType;
    bottomNode?: React.ReactNode;
    onPress?: () => void;
}

const CardRow: React.FC<ICardRowProps> = ({
    leftSubtitle,
    customRootStyle,
    leftTitleIcon,
    leftIcon,
    rightIcon,
    leftTitle,
    highlightCardTextColor,
    amount,
    onPress,
    bottomNode,
}) => {
    const styles = getStyles(highlightCardTextColor);

    return (
        <TouchableOpacity style={[styles.root, customRootStyle]} onPress={onPress} activeOpacity={1}>
            <View style={styles.cardBody}>
                <View style={styles.cardRowLeft}>
                    {leftIcon && <Image style={styles.leftIcon} source={leftIcon} />}

                    <View style={styles.cardRowLeftTextContainer}>
                        <Text style={styles.leftTitle}>
                            {leftTitle} {leftTitleIcon && <Image style={styles.letTitleIcon} source={leftTitleIcon} />}
                        </Text>
                        <Text style={styles.leftSubtitle}>{leftSubtitle}</Text>
                    </View>
                </View>

                <View style={styles.cardRowRight}>
                    <Text style={styles.rightTitle}>{formatPrice(amount)}</Text>

                    {rightIcon && <Image style={styles.rightIcon} source={rightIcon} />}
                </View>
            </View>
            {bottomNode}
        </TouchableOpacity>
    );
};

export default CardRow;
