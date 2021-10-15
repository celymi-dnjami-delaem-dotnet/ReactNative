import React, { useState } from 'react';
import AccountOverlay, { IProfileMenuOption, ProfileMenuOptions } from './AccountOverlay';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../actions/authActions';
import { headerRightStyles as styles } from './styles';
import { Image, TouchableOpacity } from 'react-native';
import Routes from '../../constants/routes';
import { getUserAvatarLink } from '../../selectors/authSelectors';

export interface IHeaderRightProps extends NativeStackScreenProps<Record<string, object | undefined>> {}

const HeaderRight: React.FC<IHeaderRightProps> = ({ navigation }) => {
    const dispatch = useDispatch();

    const userAvatarLink: string = useSelector(getUserAvatarLink);

    const [accountOverlayVisible, setAccountOverlayVisible] = useState(false);

    const onSelectMenuOption = (type: ProfileMenuOptions): void => {
        switch (type) {
            case ProfileMenuOptions.EditProfile:
                // @ts-ignore
                navigation.navigate(Routes.profile);
                setAccountOverlayVisible(false);
                break;
            case ProfileMenuOptions.LogOut:
                dispatch(signOut());
                break;
            default:
                break;
        }
    };

    const menuOptions: IProfileMenuOption[] = [
        {
            title: 'Edit profile',
            type: ProfileMenuOptions.EditProfile,
            onPress: onSelectMenuOption,
        },
        {
            title: 'Sign out from account',
            type: ProfileMenuOptions.LogOut,
            onPress: onSelectMenuOption,
        },
    ];

    const toggleAccountOverlay = (): void => {
        setAccountOverlayVisible(!accountOverlayVisible);
    };

    return (
        <React.Fragment>
            <AccountOverlay
                accountOverlayVisible={accountOverlayVisible}
                toggleAccountOverlay={toggleAccountOverlay}
                menuOptions={menuOptions}
            />
            <TouchableOpacity activeOpacity={1} style={styles.icon} onPress={toggleAccountOverlay}>
                <Image
                    source={{
                        uri: userAvatarLink,
                    }}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </React.Fragment>
    );
};

export default HeaderRight;
