import React from 'react';
import { Overlay } from 'react-native-elements';
import { Button } from 'react-native';

export enum ProfileMenuOptions {
    EditProfile = 'EditProfile',
    LogOut = 'LogOut',
}

export interface IAccountOverlayProps {
    accountOverlayVisible: boolean;
    toggleAccountOverlay: () => void;
    menuOptions: IProfileMenuOption[];
}

export interface IProfileMenuOption {
    title: string;
    type: ProfileMenuOptions;
    onPress: (type: ProfileMenuOptions) => void;
}

const AccountOverlay: React.FC<IAccountOverlayProps> = ({
    accountOverlayVisible,
    toggleAccountOverlay,
    menuOptions,
}) => (
    <Overlay isVisible={accountOverlayVisible} onBackdropPress={toggleAccountOverlay}>
        {menuOptions.map(x => {
            const onPress = () => {
                x.onPress(x.type);
            };

            return <Button key={x.type} title={x.title} onPress={onPress} />;
        })}
    </Overlay>
);

export default AccountOverlay;
