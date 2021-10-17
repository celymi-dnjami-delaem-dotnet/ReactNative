import React from 'react';
import Accounts, { IAccountsProps } from '../components/accounts/Accounts';
import { accountOverviewScreens } from '../constants/accounts';
import Routes from '../constants/routes';
import CardTooltip from '../components/accounts/CardTooltip';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export interface IAccountsScreenProps extends NativeStackScreenProps<Record<string, never>> {}

const AccountsScreen = ({ navigation }: IAccountsScreenProps) => {
    const accountOverview = accountOverviewScreens.map(x =>
        x.routeName === Routes.saving
            ? { ...x, bottomNode: <CardTooltip iconSymbol="&#9650;" text="Savings is up to 3% from last month" /> }
            : x,
    );

    const onHandleNavigation = (route: keyof typeof Routes): void => {
        if (route === Routes.goodness) {
            return;
        }

        const navigationScreen = accountOverview.find(x => x.routeName === route);

        navigation.navigate({
            name: route,
            // @ts-ignore
            params: {
                pageName: navigationScreen?.routeName,
                title: navigationScreen?.leftSubtitle,
                amount: navigationScreen?.amount,
            },
        });
    };

    const accountsProps: IAccountsProps = {
        accountOverview,
        onHandleNavigation,
    };

    return <Accounts {...accountsProps} />;
};

export default AccountsScreen;
