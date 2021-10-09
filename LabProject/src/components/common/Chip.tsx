import React from 'react';
import { Chip as RNEChip } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { IconNode } from 'react-native-elements/dist/icons/Icon';
import theme from '../../theme/theme';

export enum PillType {
    Solid = 'solid',
    Outline = 'outline',
}

export enum ChipColor {
    Primary = 'primary',
    Grey = 'grey',
}

export interface IChipProps {
    title: string;
    type?: PillType;
    icon?: IconNode;
    chipColor?: ChipColor;
}

const Chip: React.FC<IChipProps> = ({ title, icon, chipColor = ChipColor.Primary }) => (
    <RNEChip
        containerStyle={styles.container}
        buttonStyle={styles[chipColor]}
        titleStyle={styles[chipColor]}
        iconContainerStyle={styles.iconContainer}
        title={title}
        icon={icon}
        iconPosition="left"
        type="outline"
    />
);

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
    },
    iconContainer: {
        width: 30,
        height: 30,
    },
    grey: {
        fontSize: 16,
        color: theme.colors?.grey1,
        borderColor: theme.colors?.grey1,
    },
});

export default Chip;
