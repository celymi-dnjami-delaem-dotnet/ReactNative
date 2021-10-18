import React from 'react';
import Savings, { ISavingsProps } from '../components/savings/Savings';
import { IBaseRouteParams } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { savingsConstants } from '../constants/card-row';

interface ISavingScreenRouteParams extends IBaseRouteParams {
    amount: number;
}

export interface ISavingScreenProps extends NativeStackScreenProps<Record<string, ISavingScreenRouteParams>> {}

const SavingScreen: React.FC<ISavingScreenProps> = ({ route: { params } }) => {
    const fakeTotalInterest: number = 50;
    const fakeTotalPoints: number = 600;

    const savingsProps: ISavingsProps = {
        amount: params.amount,
        totalInterest: fakeTotalInterest,
        totalPoints: fakeTotalPoints,
        savingsHistoryItems: savingsConstants,
    };

    return <Savings {...savingsProps} />;
};

export default SavingScreen;
