import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Checking, { ICheckingProps } from '../components/checking/Checking';
import { IBaseRouteParams } from '../types';

interface ICheckingRouteArgs extends IBaseRouteParams {
    amount: number;
}

export interface ICheckingScreenProps extends NativeStackScreenProps<Record<string, ICheckingRouteArgs>> {}

const CheckingScreen = ({ route: { params } }: ICheckingScreenProps) => {
    const checkProps: ICheckingProps = {
        totalAmount: params.amount,
    };

    return <Checking {...checkProps} />;
};

export default CheckingScreen;
