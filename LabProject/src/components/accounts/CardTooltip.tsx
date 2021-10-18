import React from 'react';
import { Text } from 'react-native';
import { cardTooltipStyles as styles } from './styles';

export interface ICardTooltip {
    iconSymbol: string;
    text: string;
}

const CardTooltip: React.FC<ICardTooltip> = ({ iconSymbol, text }: ICardTooltip) => (
    <Text style={styles.root}>
        {iconSymbol} {text}
    </Text>
);

export default CardTooltip;
