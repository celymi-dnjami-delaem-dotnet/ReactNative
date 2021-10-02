import React from 'react';
import { Overlay } from 'react-native-elements';
import { Button } from 'react-native';

export interface IAccountOverlayProps {
    accountOverlayVisible: boolean;
    toggleAccountOverlay: () => void;
    onPressSignOut: () => void;
}

const AccountOverlay = (props: IAccountOverlayProps) => {
    const { accountOverlayVisible, toggleAccountOverlay, onPressSignOut } = props;

    return (
        <Overlay isVisible={accountOverlayVisible} onBackdropPress={toggleAccountOverlay}>
            <Button title="Sign out from account" onPress={onPressSignOut} />
        </Overlay>
    );
};

export default AccountOverlay;
