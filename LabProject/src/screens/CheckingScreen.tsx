import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Checking, { ICheckingProps } from '../components/checking/Checking';
import { IBaseRouteParams } from '../types';
import { checkingOptions } from '../constants/card-row';

interface ICheckingRouteArgs extends IBaseRouteParams {
    amount: number;
}

export interface ICheckingScreenProps extends NativeStackScreenProps<Record<string, ICheckingRouteArgs>> {}

const CheckingScreen = ({ route: { params } }: ICheckingScreenProps) => {
    const checkProps: ICheckingProps = {
        totalAmount: params.amount,
        checkingOptions,
    };

    return <Checking {...checkProps} />;
};

export default CheckingScreen;
