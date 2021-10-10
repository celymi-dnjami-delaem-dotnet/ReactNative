import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { getUserName } from '../selectors/authSelectors';
import Home, { IHomeProps } from '../components/home/Home';
import { IAccountsOverviewRowCard } from '../components/home/AccountsOverview';
import Routes from '../constants/routes';

export interface IHomeScreenProps extends NativeStackScreenProps<Record<string, never>> {}

const HomeScreen: React.FC<IHomeScreenProps> = () => {
    const userName: string = useSelector(getUserName);

    const accountOverviewScreens: IAccountsOverviewRowCard[] = [
        {
            routeName: Routes.checking,
            leftTitle: Routes.checking,
            leftSubtitle: 'Main Account',
            amount: 1500.2,
        },
        {
            routeName: Routes.saving,
            leftTitle: Routes.saving,
            leftSubtitle: 'Buy a house',
            amount: 5000.2,
        },
        {
            routeName: Routes.cards,
            leftTitle: 'Goodness',
            leftSubtitle: 'Cash rewards',
            amount: 500.4,
            icon: require('../../assets/icons/heart-icon.png'),
        },
    ];

    const homeProps: IHomeProps = {
        userName,
        accountOverviewScreens,
    };

    return <Home {...homeProps} />;
};

export default HomeScreen;
