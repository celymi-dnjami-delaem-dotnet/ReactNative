import React, { useState } from 'react';
import TopBar, { ITopBarProps } from './TopBar';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Routes from '../../constants/routes';

export interface ITopBarContainerProps extends NativeStackScreenProps<Record<string, object | undefined>> {
    pageName?: string;
    title?: string;
}

const TopBarContainer = (props: ITopBarContainerProps) => {
    const { navigation, pageName, title } = props;

    const [accountOverlayVisible, setAccountOverlayVisible] = useState(false);

    const onPressSignOut = () => {
        navigation.reset({ index: 0, routes: [{ name: Routes.signIn }] });
    };

    const toggleAccountOverlay = () => {
        setAccountOverlayVisible(!accountOverlayVisible);
    };

    const topBarProps: ITopBarProps = {
        accountOverlayVisible,
        pageName,
        title,
        toggleAccountOverlay,
        onPressSignOut,
    };

    return <TopBar {...topBarProps} />;
};

export default TopBarContainer;
