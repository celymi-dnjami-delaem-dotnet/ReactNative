import React from 'react';
import Accounts, { IAccountsProps } from '../components/accounts/Accounts';
import { accountOverviewScreens } from '../constants/accounts';
import Routes from '../constants/routes';
import CardTooltip from '../components/accounts/CardTooltip';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export interface IAccountsScreenProps extends NativeStackScreenProps<Record<string, never>> {}

const AccountsScreen = ({ navigation }: IAccountsScreenProps) => {
    const onHandleNavigation = (route: keyof typeof Routes): void => {
        if (route === Routes.goodness) {
            return;
        }

        // @ts-ignore
        navigation.navigate(route);
    };

    const accountsProps: IAccountsProps = {
        accountOverview: accountOverviewScreens.map(x =>
            x.routeName === Routes.saving
                ? { ...x, bottomNode: <CardTooltip iconSymbol="&#9650;" text="Savings is up to 3% from last month" /> }
                : x,
        ),
        onHandleNavigation,
    };

    return <Accounts {...accountsProps} />;
};

export default AccountsScreen;
