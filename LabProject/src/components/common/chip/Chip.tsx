import React from 'react';
import { Chip as RNEChip } from 'react-native-elements';
import { IconNode } from 'react-native-elements/dist/icons/Icon';
import styles from './styles';

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

export default Chip;
