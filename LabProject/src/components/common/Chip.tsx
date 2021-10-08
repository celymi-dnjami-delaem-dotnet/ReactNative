import React from 'react';
import { Chip as RNEChip } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { IconNode } from 'react-native-elements/dist/icons/Icon';

export enum PillType {
    Solid = 'solid',
    Outline = 'outline',
}

export interface IChipProps {
    title: string;
    type?: PillType;
    icon?: IconNode;
}

const Chip: React.FC<IChipProps> = ({ title, icon }) => (
    <RNEChip containerStyle={styles.container} title={title} icon={icon} iconPosition="left" type="outline" />
);

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
    },
});

export default Chip;
