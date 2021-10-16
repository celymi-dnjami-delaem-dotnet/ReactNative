import React from 'react';
import Accounts, { IAccountsProps } from '../components/accounts/Accounts';
import { accountOverviewScreens } from '../constants/accounts';
import Routes from '../constants/routes';
import CardTooltip from '../components/accounts/CardTooltip';

const AccountsScreen = () => {
    const accountsProps: IAccountsProps = {
        accountOverview: accountOverviewScreens.map(x =>
            x.routeName === Routes.saving
                ? { ...x, bottomNode: <CardTooltip iconSymbol="&#9650;" text="Savings is up to 3% from last month" /> }
                : x,
        ),
    };

    return <Accounts {...accountsProps} />;
};

export default AccountsScreen;
