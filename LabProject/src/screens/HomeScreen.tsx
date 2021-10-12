import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { getUserName } from '../selectors/authSelectors';
import Home, { IHomeProps } from '../components/home/Home';
import { IAccountsOverviewRowCard } from '../components/home/AccountsOverview';
import Routes from '../constants/routes';
import { IGoodnessCardProps } from '../components/home/GoodnessCard';

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

    const goodnessCards: IGoodnessCardProps[] = [
        {
            avatarLink: require('../../assets/icons/avatar-icon.png'),
            imageLink: require('../../assets/images/rectangle-image.png'),
            title: 'Your Giving Impact',
            charityName: 'St Jude',
            time: 4,
            text: `${userName}, your donation has helped 5 amazing kids get much needed cancer surgery, thanks for being amazing!`,
            onPressShare: () => {
                console.log('share');
            },
        },
        {
            avatarLink: require('../../assets/icons/avatar-icon.png'),
            imageLink: require('../../assets/images/rectangle2-image.png'),
            title: 'Your Giving Impact',
            charityName: 'St Louis',
            time: 6,
            text: `${userName}, your donation has helped 2 amazing kids get much needed cancer surgery, thanks for being amazing!`,
            onPressShare: () => {
                console.log('share');
            },
        },
    ];

    const homeProps: IHomeProps = {
        userName,
        accountOverviewScreens,
        goodnessCards,
    };

    return <Home {...homeProps} />;
};

export default HomeScreen;
