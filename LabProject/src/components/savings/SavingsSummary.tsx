import React from 'react';
import { Text, View } from 'react-native';
import { savingsSummaryStyles as styles } from './styles';

export interface ISavingsSummaryProps {
    title: string;
    value: string | number;
}

const SavingsSummary: React.FC<ISavingsSummaryProps> = ({ title, value }) => (
    <View style={styles.root}>
        <Text style={styles.scoresTitle}>{title}</Text>
        <Text style={styles.scoresResult}>+{value}</Text>
    </View>
);

export default SavingsSummary;
