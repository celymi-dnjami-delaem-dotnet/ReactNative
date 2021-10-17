import React from 'react';
import { View } from 'react-native';
import TotalCash from '../total-cash/TotalCash';
import { getTotalPrice } from '../../utils';
import { checkingStyles as styles } from './styles';
import SearchPanel from './SearchPanel';

export interface ICheckingProps {
    totalAmount: number;
}

const Checking = ({ totalAmount }: ICheckingProps) => {
    return (
        <View style={styles.root}>
            <TotalCash amount={getTotalPrice(totalAmount)} titleFontSize={30} subTitleFontSize={18} />
            <SearchPanel />
        </View>
    );
};

export default Checking;
