import { ICardRowProps } from '../components/common/card-row/CardRow';
import Routes from './routes';
import { ICardRowListProps, ISavingsCardRowProps } from '../types';
import theme from '../theme/theme';

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

export const checkingOptions: ICardRowListProps[] = [
    {
        title: new Date(2021, 9, 13).toLocaleDateString(),
        data: [
            {
                leftTitle: 'Target',
                leftSubtitle: 'Closter NJ | Debit card',
                amount: 63.95,
            },
            {
                leftTitle: 'AplPay 7-Eleven',
                leftSubtitle: 'Cresskill NJ | iPhone',
                amount: 17.75,
            },
            {
                leftTitle: 'Facebook inc.',
                leftSubtitle: 'Pay day! | Yay!',
                amount: 1200.5,
                highlightCardTextColor: theme.colors?.green,
                leftSubtitleHighlightColor: theme.colors?.green,
                leftIcon: require('../../assets/icons/confetti-icon.png'),
            },
            {
                leftTitle: 'Lencrafters',
                leftSubtitle: 'Paramus NJ | Debit card',
                amount: 320.73,
            },
        ],
    },
    {
        title: new Date(2021, 9, 12).toLocaleDateString(),
        data: [
            {
                leftTitle: 'Savings transfer',
                leftSubtitle: 'Buy a house',
                amount: 10000,
                highlightCardTextColor: theme.colors?.green,
                leftSubtitleHighlightColor: theme.colors?.green,
            },
            {
                leftTitle: 'Starbucks',
                leftSubtitle: 'Closter NJ | Debit card',
                amount: 12.02,
            },
            {
                leftTitle: 'Stop and Shop',
                leftSubtitle: 'Closter NJ | Debit card',
                amount: 236.52,
            },
            {
                leftTitle: 'Lencrafters',
                leftSubtitle: 'Paramus NJ | Debit card',
                amount: 320.73,
            },
        ],
    },
];

export const savingsConstants: ISavingsCardRowProps[] = [
    {
        title: {
            date: new Date().toLocaleDateString(),
            price: 5000,
        },
        data: [
            {
                leftTitle: 'Deposit',
                leftSubtitle: new Date().toLocaleDateString(),
                amount: 2000,
                highlightCardTextColor: theme.colors?.green,
                leftSubtitleHighlightColor: theme.colors?.grey1,
            },
            {
                leftTitle: 'Deposit',
                leftSubtitle: new Date().toLocaleDateString(),
                amount: 2000,
                highlightCardTextColor: theme.colors?.green,
                leftSubtitleHighlightColor: theme.colors?.grey1,
            },
            {
                leftTitle: 'Wire Transfer',
                leftSubtitle: new Date().toLocaleDateString(),
                amount: 200.5,
                highlightCardTextColor: theme.colors?.green,
                leftSubtitleHighlightColor: theme.colors?.grey1,
            },
            {
                leftTitle: 'Transfer',
                leftSubtitle: new Date().toLocaleDateString(),
                amount: 800.65,
                highlightCardTextColor: theme.colors?.green,
                leftSubtitleHighlightColor: theme.colors?.grey1,
            },
        ],
    },
];
