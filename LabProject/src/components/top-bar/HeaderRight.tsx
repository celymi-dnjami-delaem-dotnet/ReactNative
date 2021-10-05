import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import AccountOverlay from './AccountOverlay';
import { StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import theme from '../../theme/theme';
import { useDispatch } from 'react-redux';
import { signOut } from '../../actions/authActions';

export interface IHeaderRightProps extends NativeStackScreenProps<Record<string, object | undefined>> {}

const HeaderRight = ({}: IHeaderRightProps) => {
    const dispatch = useDispatch();
    const [accountOverlayVisible, setAccountOverlayVisible] = useState(false);

    const onPressSignOut = (): void => {
        dispatch(signOut());
    };

    const toggleAccountOverlay = (): void => {
        setAccountOverlayVisible(!accountOverlayVisible);
    };

    return (
        <React.Fragment>
            <AccountOverlay
                accountOverlayVisible={accountOverlayVisible}
                toggleAccountOverlay={toggleAccountOverlay}
                onPressSignOut={onPressSignOut}
            />
            <Icon onPress={toggleAccountOverlay} style={styles.icon} name="person-circle-outline" />
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    icon: {
        color: theme.colors?.white,
        fontSize: 32,
    },
});

export default HeaderRight;
