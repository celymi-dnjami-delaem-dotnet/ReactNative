import { ICardRowProps } from '../components/common/card-row/CardRow';
import Routes from './routes';

export const accountOverviewScreens: ICardRowProps[] = [
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
        routeName: Routes.goodness,
        leftTitle: 'Goodness',
        leftSubtitle: 'Cash rewards',
        amount: 500.4,
        leftTitleIcon: require('../../assets/icons/heart-icon.png'),
    },
];
