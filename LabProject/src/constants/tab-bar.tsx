import { ITabBarType } from '../types/tab-bar';
import Home from '../screens/Home';
import Accounts from '../screens/Accounts';
import Giving from '../screens/Giving';
import Cards from '../screens/Cards';
import Payments from '../screens/Payments';
import Routes from './routes';

export const TabBarLabels = {
    home: 'Home',
    accounts: 'Accounts',
    giving: 'Giving',
    payments: 'Payments',
    cards: 'Cards',
};

export const TabBarItems: ITabBarType[] = [
    {
        name: Routes.home,
        title: TabBarLabels.home,
        component: Home,
        iconSource: require('../../assets/icons/home-icon.png'),
    },
    {
        name: Routes.accounts,
        title: TabBarLabels.accounts,
        component: Accounts,
        iconSource: require('../../assets/icons/accounts-icon.png'),
    },
    {
        name: Routes.giving,
        title: TabBarLabels.giving,
        component: Giving,
        iconSource: require('../../assets/icons/giving-icon.png'),
    },
    {
        name: Routes.payments,
        title: TabBarLabels.payments,
        component: Payments,
        iconSource: require('../../assets/icons/payment-icon.png'),
    },
    {
        name: Routes.cards,
        title: TabBarLabels.cards,
        component: Cards,
        iconSource: require('../../assets/icons/credit-cards-icon.png'),
    },
];
