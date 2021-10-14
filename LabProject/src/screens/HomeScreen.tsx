import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { getUserName } from '../selectors/authSelectors';
import Home, { IHomeProps } from '../components/home/Home';
import Routes from '../constants/routes';
import { IGoodnessCardProps } from '../components/home/GoodnessCard';
import { ICardRowProps } from '../components/common/card-row/CardRow';

export interface IHomeScreenProps extends NativeStackScreenProps<Record<string, never>> {}

const HomeScreen: React.FC<IHomeScreenProps> = ({ navigation }: IHomeScreenProps) => {
    const userName: string = useSelector(getUserName);

    const onHandleNavigation = (route: keyof typeof Routes): void => {
        // @ts-ignore
        navigation.navigate(route);
    };

    const accountOverviewScreens: ICardRowProps[] = [
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
            leftTitleIcon: require('../../assets/icons/heart-icon.png'),
        },
    ];

    const goodnessCards: IGoodnessCardProps[] = [
        {
            isVideo: false,
            avatarLink: require('../../assets/icons/avatar-icon.png'),
            graphLink: require('../../assets/images/rectangle-image.png'),
            title: 'Your Giving Impact',
            charityName: 'St Jude',
            time: 4,
            text: `${userName}, your donation has helped 5 amazing kids get much needed cancer surgery, thanks for being amazing!`,
            onPressShare: () => {
                console.log('share');
            },
        },
        {
            isVideo: true,
            avatarLink: require('../../assets/icons/avatar-icon.png'),
            graphLink: require('../../assets/videos/test-video.mp4'),
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
        onHandleNavigation,
    };

    return <Home {...homeProps} />;
};

export default HomeScreen;
