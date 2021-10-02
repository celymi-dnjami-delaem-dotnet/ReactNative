import { ITabBarType } from '../types/tab-bar';
import Home from '../screens/Home';
import Accounts from '../screens/Accounts';
import Giving from '../screens/Giving';
import Cards from '../screens/Cards';
import Payments from '../screens/Payments';

export const TabBarLabels = {
    home: 'Home',
    accounts: 'Accounts',
    giving: 'Giving',
    payments: 'Payments',
    cards: 'Cards',
};

export const TabBarItems: ITabBarType[] = [
    {
        name: TabBarLabels.home,
        component: Home,
        iconSource: require('../../assets/icons/home-icon.png'),
    },
    {
        name: TabBarLabels.accounts,
        component: Accounts,
        iconSource: require('../../assets/icons/accounts-icon.png'),
    },
    {
        name: TabBarLabels.giving,
        component: Giving,
        iconSource: require('../../assets/icons/giving-icon.png'),
    },
    {
        name: TabBarLabels.payments,
        component: Payments,
        iconSource: require('../../assets/icons/payment-icon.png'),
    },
    {
        name: TabBarLabels.cards,
        component: Cards,
        iconSource: require('../../assets/icons/credit-cards-icon.png'),
    },
];
